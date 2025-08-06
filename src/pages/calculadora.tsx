import { useForm } from "react-hook-form";
import { useState } from "react";
import { HeaderPages } from "../features/components/ui/headerPages";

type FormInputs = {
  tieneBPS: boolean;
  tipoDGI: "monotributo" | "iva_minimo" | "";
  tieneCajaProfesional: boolean;
  ingresosMensuales?: number;
  ingresos: number;
};

export default function CalculadoraPagos() {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [resultado, setResultado] = useState<{
    bps: number;
    dgi: number;
    caja: number;
    irpf: number;
    total: number;
  } | null>(null);

  const onSubmit = (data: FormInputs) => {
    const {
      tieneBPS,
      tipoDGI,
      tieneCajaProfesional,
      ingresosMensuales,
      ingresos,
    } = data;

    let ingresosCalculados = ingresosMensuales || 0;

    if (!ingresosMensuales) {
      if (tipoDGI === "iva_minimo") {
        ingresosCalculados = ingresos * 0.06;
      } else if (tipoDGI === "monotributo") {
        ingresosCalculados = 1500;
      }
    }

    const bps = tieneBPS ? 5500 : 0;
    const dgi =
      tipoDGI === "monotributo"
        ? 1500
        : tipoDGI === "iva_minimo"
          ? ingresosCalculados * 0.06
          : 0;
    const caja = tieneCajaProfesional ? 5000 : 0;

    const minimoNoImponible = 42960;
    let irpf = 0;

    const tramos = [
      { hasta: 64440, tasa: 0.1 },
      { hasta: 96660, tasa: 0.15 },
      { hasta: 145020, tasa: 0.2 },
      { hasta: Infinity, tasa: 0.22 },
    ];

    let base = minimoNoImponible;
    const restante = ingresos;
    irpf = 0;

    for (const tramo of tramos) {
      if (restante > base) {
        const montoTramo = Math.min(restante, tramo.hasta) - base;
        irpf += montoTramo * tramo.tasa;
        base = tramo.hasta;
      } else {
        break;
      }
    }

    const total = bps + dgi + caja + irpf;

    setResultado({ bps, dgi, caja, irpf, total });
  };

  return (
    <div className="flex flex-col flex-1">
      <HeaderPages title="Calculadora de pagos" />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="font-semibold">¿Pagás BPS?</label>
          <input type="checkbox" {...register("tieneBPS")} className="ml-2" />
        </div>

        <div>
          <label className="font-semibold block mb-1">Tipo de DGI</label>
          <select
            {...register("tipoDGI", { required: "Seleccioná un tipo" })}
            className="w-full p-2 border rounded bg-gray-500 text-white"
          >
            <option value="">-- Seleccionar --</option>
            <option value="monotributo">Monotributo</option>
            <option value="iva_minimo">IVA mínimo</option>
          </select>
          {errors.tipoDGI && (
            <p className="text-red-600 text-sm mt-1">
              {errors.tipoDGI.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="ingresos" className="block font-semibold mb-1">
            Ingresos estimados por mes
          </label>
          <input
            type="number"
            id="ingresos"
            {...register("ingresos", {
              required: "Ingresos requeridos",
              min: { value: 0, message: "Debe ser mayor o igual a 0" },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.ingresos && (
            <p className="text-red-600 text-sm mt-1">
              {errors.ingresos.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="ingresosMensuales"
            className="block font-semibold mb-1"
          >
            Ingresos mensuales (si ya lo sabés, opcional)
          </label>
          <input
            type="number"
            id="ingresosMensuales"
            {...register("ingresosMensuales", {
              min: { value: 0, message: "Debe ser mayor o igual a 0" },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.ingresosMensuales && (
            <p className="text-red-600 text-sm mt-1">
              {errors.ingresosMensuales.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-semibold">¿Pagás Caja Profesional?</label>
          <input
            type="checkbox"
            {...register("tieneCajaProfesional")}
            className="ml-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Calcular
        </button>
      </form>

      {resultado && (
        <div className="mt-6  bg-gray-400/20 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2">Resumen Estimado</h3>
          <ul className="space-y-1">
            <li>🧾 BPS: ${resultado.bps.toFixed(2)}</li>
            <li>💰 DGI: ${resultado.dgi.toFixed(2)}</li>
            <li>🧮 IRPF: ${resultado.irpf.toFixed(2)}</li>
            <li>📦 Caja Profesional: ${resultado.caja.toFixed(2)}</li>
            <li className="font-bold mt-2">
              💵 Total: ${resultado.total.toFixed(2)}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
