import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type FormInputs = {
  impuesto: string;
  periodo: string;
  monto: number;
  metodoPago: string;
};

export default function PagoDGI() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    Swal.fire({
      title: "Pago de DGI registrado!",
      text: `$${data.monto.toFixed(2)} para el periodo ${data.periodo} con método ${data.metodoPago} y el impuesto ${data.impuesto}`,
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#22C55E",
    }).then((result) => {
      if (result.isConfirmed) reset();
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pago DGI</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md"
      >
        <div>
          <label htmlFor="impuesto" className="block font-semibold mb-1">
            Tipo de impuesto
          </label>
          <select
            id="impuesto"
            {...register("impuesto", { required: "Seleccioná un impuesto" })}
            className="w-full p-2 border rounded  bg-gray-500 text-white"
          >
            <option value="">-- Seleccionar --</option>
            <option value="IVA">IVA</option>
            <option value="IRPF">IRPF</option>
            <option value="IRAE">IRAE</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.impuesto && (
            <p className="text-red-600 mt-1">{errors.impuesto.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="periodo" className="block font-semibold mb-1">
            Período (Año y mes)
          </label>
          <input
            type="month"
            id="periodo"
            {...register("periodo", { required: "Seleccioná un período" })}
            className="w-full p-2 border rounded"
          />
          {errors.periodo && (
            <p className="text-red-600 mt-1">{errors.periodo.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="monto" className="block font-semibold mb-1">
            Monto a pagar
          </label>
          <input
            type="number"
            id="monto"
            {...register("monto", {
              required: "El monto es obligatorio",
              min: { value: 1, message: "Debe ser mayor a 0" },
              valueAsNumber: true,
            })}
            className="w-full p-2 border rounded"
            step="0.01"
            min="0"
          />
          {errors.monto && (
            <p className="text-red-600 mt-1">{errors.monto.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="metodoPago" className="block font-semibold mb-1">
            Método de pago
          </label>
          <select
            id="metodoPago"
            {...register("metodoPago", { required: "Seleccioná un método" })}
            className="w-full p-2 border rounded  bg-gray-500 text-white"
          >
            <option value="">-- Seleccionar --</option>
            <option value="debito">Débito automático</option>
            <option value="transferencia">Transferencia bancaria</option>
            <option value="efectivo">Efectivo</option>
            <option value="web">Pago web</option>
          </select>
          {errors.metodoPago && (
            <p className="text-red-600 mt-1">{errors.metodoPago.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Guardar Pago DGI
        </button>
      </form>
    </div>
  );
}
