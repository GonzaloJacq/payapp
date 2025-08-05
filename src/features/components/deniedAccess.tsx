import { useNavigate } from "react-router";
import { Body } from "./body";

export default function DeniedAcces() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <Body>
      <div className="min-h-screen flex flex-col p-4">
        <h1 className="text-2xl text-red-600">Acceso denegado</h1>
        <button
          onClick={handleRedirect}
          className="cursor-pointer hover:text-blue-500 transition"
        >
          Volver al Login
        </button>
      </div>
    </Body>
  );
}
