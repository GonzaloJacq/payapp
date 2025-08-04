import moneyLogo from "../assets/fly-money.svg";
import { Body } from "../features/components/body";
import { CustomButton } from "../features/components/customButton";
export default function Index() {
  return (
    <Body>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <img src={moneyLogo} className="h-32 w-32 " alt="React logo" />
        </div>
        <h1 className="text-5xl">My PayApp</h1>
        <div>
          <CustomButton href="/pagar" label="Realizar pago" />
          <CustomButton href="/pagos" label="Historial de pagos" />
          <CustomButton href="/guia" label="Guía de pagos" />
          <CustomButton href="/calculadora" label="calculadora" />
        </div>
      </div>
    </Body>
  );
}
