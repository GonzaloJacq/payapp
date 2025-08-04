import { Body } from "../features/components/body";
import { HeaderPages } from "../features/components/headerPages";

export default function Pagar() {
  return (
    <div className="flex flex-col flex-1">
      <HeaderPages title="Pagar" />
      <Body>
        <h2 className="text-3xl">Pagar</h2>
      </Body>
    </div>
  );
}
