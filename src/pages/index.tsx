import { BookOpen, Calculator, CreditCard } from "lucide-react";
import moneyLogo from "../assets/fly-money.svg";
import { Body } from "../features/components/body";
import { CustomButton } from "../features/components/ui/customButton";
export default function Index() {
  return (
    <Body>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <img src={moneyLogo} className="h-32 w-32 " alt="React logo" />
        </div>
        <h1 className="text-5xl">My PayApp</h1>
        <div>
          <CustomButton
            icon={<CreditCard />}
            href="/pagar"
            label="Realizar pago"
          />
          <CustomButton
            icon={<BookOpen />}
            href="/guia"
            label="Guía de pagos"
          />
          <CustomButton
            icon={<Calculator />}
            href="/calculadora"
            label="Calculadora"
          />
        </div>
      </div>
    </Body>
  );
}
