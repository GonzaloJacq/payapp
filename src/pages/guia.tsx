import { Link } from "react-router";
import { HeaderPages } from "../features/index/components/headerPages";

export default function Guia() {
  return (
    <div className="m-4">
      <HeaderPages title="Guia" />
      <p className="bg-gray-400/20 p-6 rounded-lg shadow-md block mb-2 text-center">
        Esta guía está diseñada para ayudarte a cumplir con tus obligaciones
        fiscales y financieras como unipersonal en Uruguay. Aquí encontrarás los
        pagos que debés realizar, sus fechas y cómo hacerlos.
      </p>
      <div>
        <details className="mb-2">
          <summary className="cursor-pointer text-blue-600 underline">
            ¿Cómo pagar en la DGI?
          </summary>
          <ul className="list-disc ml-6 mt-2 text-sm text-gray-600">
            <li>
              Ingresá a
              <Link
                to={"https://www.dgi.gub.uy"}
                className="text-blue-500 underline"
              >
                dgi.gub.uy
              </Link>
            </li>
            <li>Usá tu usuario o CI electrónico</li>
            <li>Seleccioná el impuesto y el mes</li>
            <li>Pagá online o generá boleta</li>
          </ul>
        </details>
      </div>
      <ul className="list-disc ml-6">
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
      <div>Tips importantes</div>
      <ul>
        <li>Agendar recordatorios en el celular.</li>
        <li>No esperar al último día.</li>
        <li>Revisar posibles multas por atraso.</li>
        <li>Guardar comprobantes.</li>
      </ul>
    </div>
  );
}
