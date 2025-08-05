import { useNavigate } from "react-router";
import { Body } from "./body";
import Footer from "../../footer";

export default function DeniedAcces() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Body>
        <div className="flex flex-1 flex-col items-center justify-center text-center p-4">
          <h1 className="text-2xl text-red-600 mb-4">Acceso denegado</h1>
          <button
            onClick={handleRedirect}
            className="cursor-pointer text-blue-600 hover:underline transition"
          >
            Volver al Login
          </button>
        </div>
      </Body>
      <Footer />
    </div>
  );
}
