import { Link } from "react-router";
import { HeaderPages } from "../features/components/headerPages";
import { Body } from "../features/components/body";

export default function Guia() {
  return (
    <div className="flex flex-col flex-1">
      <HeaderPages title="Guía de Pagos" />
      <Body>
        <div className="m-4 space-y-6">
          <p>
            Esta guía está diseñada para ayudarte a cumplir con tus obligaciones
            fiscales y financieras como unipersonal en Uruguay. Aquí encontrarás
            los pagos que debés realizar, sus fechas y cómo hacerlos.
          </p>

          <div>
            <h2 className="text-lg font-semibold mb-2">
              ¿Cómo pagar en la DGI?
            </h2>
            <ul className="list-disc ml-6 text-sm  space-y-1">
              <li>
                Ingresá a{" "}
                <Link
                  to="https://www.dgi.gub.uy"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dgi.gub.uy
                </Link>
              </li>
              <li>Usá tu usuario o CI electrónico</li>
              <li>Seleccioná el impuesto y el mes</li>
              <li>Pagá online o generá boleta</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 ">
              Fechas de pago importantes
            </h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                <strong>15 de cada mes:</strong> BPS
              </li>
              <li>
                <strong>20 de cada mes:</strong> DGI
              </li>
              <li>
                <strong>Trimestral:</strong> Caja Profesional
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2 ">Tips importantes</h2>
            <ul className="list-disc ml-6  space-y-1">
              <li>Agendar recordatorios en el celular.</li>
              <li>No esperar al último día.</li>
              <li>Revisar posibles multas por atraso.</li>
              <li>Guardar comprobantes.</li>
            </ul>
          </div>
        </div>
      </Body>
    </div>
  );
}
