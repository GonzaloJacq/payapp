"use server";
import moneyLogo from "../assets/fly-money.svg";
import { CustomButton } from "../features/index/components/customButton";
export default function Index() {
  return (
    <div className="flex flex-col gap-4">
      <a href="/" className="flex justify-center items-center">
        <img
          src={moneyLogo}
          className="justify-center items-center h-32 w-32 "
          alt="React logo"
        />
      </a>
      <h1 className="text-5xl">My PayApp</h1>
      <div>
        <CustomButton href="/pagar" label="Realizar pago" />
        <CustomButton href="/pagos" label="Historial de pagos" />
        <CustomButton href="/guia" label="Guia de pagos" />
      </div>
    </div>
  );
}
