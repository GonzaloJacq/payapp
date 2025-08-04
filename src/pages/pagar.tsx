import React, { useState, Suspense, lazy } from "react";
import { HeaderPages } from "../features/components/headerPages";

const PagoBPS = lazy(() => import("../features/pagos/pagoBPS"));
const PagoDGI = lazy(() => import("../features/pagos/pagoDGI"));
const PagoCajaProfesional = lazy(
  () => import("../features/pagos/pagoCajaProfesional")
);

export default function Pagar() {
  const [tipoPago, setTipoPago] = useState<string>("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoPago(e.target.value);
  };

  const renderPagoComponent = () => {
    switch (tipoPago) {
      case "BPS":
        return <PagoBPS />;
      case "DGI":
        return <PagoDGI />;
      case "CajaProfesional":
        return <PagoCajaProfesional />;
      default:
        return <p>Seleccioná un tipo de pago para comenzar</p>;
    }
  };

  return (
    <div className="flex flex-col flex-1">
      <HeaderPages title="Pagos" />
      <div className="flex flex-col flex-1 p-6 gap-4">
        <label htmlFor="tipoPago" className="font-semibold">
          Seleccioná el tipo de pago
        </label>
        <select
          id="tipoPago"
          value={tipoPago}
          onChange={handleSelectChange}
          className="p-2 border rounded max-w-xs bg-gray-500 text-white"
        >
          <option value="">-- Seleccionar --</option>
          <option value="BPS">BPS - Aportes y Contribuciones</option>
          <option value="DGI">DGI - Impuestos</option>
          <option value="CajaProfesional">Caja Profesional</option>
          <option value="Otro">Otro</option>
        </select>

        <div className="mt-4">
          <Suspense fallback={<div>Cargando formulario...</div>}>
            {renderPagoComponent()}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
