import { Body } from "../features/components/body";
import { HeaderPages } from "../features/components/headerPages";

export default function Pagos() {
  return (
    <div className="flex flex-col flex-1">
      <HeaderPages title="Historial de pagos" />
      <Body>
        <h2 className="text-3xl">Historial de pagos</h2>
      </Body>
    </div>
  );
}
