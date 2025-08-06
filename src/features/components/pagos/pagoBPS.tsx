import { useForm } from "react-hook-form";

type FormInputs = {
  monto: number;
  mesPago: string;
  metodoPago: string;
};

export default function PagoBPS() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log("Datos Pago BPS:", data);
    alert("Pago BPS registrado!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Pago BPS</h2>

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
          <label htmlFor="mesPago" className="block font-semibold mb-1">
            Mes correspondiente
          </label>
          <input
            type="month"
            id="mesPago"
            {...register("mesPago", { required: "Seleccioná el mes" })}
            className="w-full p-2 border rounded"
          />
          {errors.mesPago && (
            <p className="text-red-600 mt-1">{errors.mesPago.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="metodoPago" className="block font-semibold mb-1">
            Método de pago
          </label>
          <select
            id="metodoPago"
            {...register("metodoPago", { required: "Seleccioná un método" })}
            className="w-full p-2 border rounded bg-gray-500 text-white"
          >
            <option value="">-- Seleccionar --</option>
            <option value="debito">Débito automático</option>
            <option value="transferencia">Transferencia bancaria</option>
            <option value="efectivo">Efectivo</option>
          </select>
          {errors.metodoPago && (
            <p className="text-red-600 mt-1">{errors.metodoPago.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Guardar Pago BPS
        </button>
      </form>
    </div>
  );
}
