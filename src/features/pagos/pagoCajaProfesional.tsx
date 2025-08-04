import { useForm } from "react-hook-form";

type FormInputs = {
  monto: number;
  periodo: string;
  metodoPago: string;
};

export default function PagoCajaProfesional() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log("Datos Pago Caja Profesional:", data);
    alert("Pago Caja Profesional registrado!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pago Caja Profesional</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 max-w-md"
      >
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
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Guardar Pago Caja Profesional
        </button>
      </form>
    </div>
  );
}
