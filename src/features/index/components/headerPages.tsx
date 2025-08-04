import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const HeaderPages = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full flex items-center px-4 py-3 border-b shadow-sm bg-white">
      <button
        onClick={() => navigate(-1)}
        className="mr-4 text-gray-600 hover:text-black transition-colors"
        aria-label="Volver"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-semibold text-gray-800 text-center flex-1">
        {title}
      </h1>
    </header>
  );
};
