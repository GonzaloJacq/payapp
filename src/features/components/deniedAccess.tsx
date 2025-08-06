import { useNavigate } from "react-router";
import { Body } from "./body";
import Footer from "./footer";
import { AlertTriangle } from "lucide-react";

export default function DeniedAcces() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Body>
        <div className="flex flex-1 items-center justify-center p-4">
          <div className="bg-gray-400/20 rounded-xl shadow-lg p-8 max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <AlertTriangle className="h-16 w-16 text-red-700" />
            </div>
            <h1 className="text-3xl font-semibold text-red-700">
              403 | Acceso denegado
            </h1>
            <p className="text-gray-400">
              No tienes los permisos necesarios para acceder a esta sección.
            </p>
            <button
              onClick={handleRedirect}
              className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition cursor-pointer"
            >
              Volver al Login
            </button>
          </div>
        </div>
      </Body>

      <Footer />
    </div>
  );
}
