import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const HeaderPages = ({ title }: { title: string }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full p-6 rounded-lg  mb-2 flex items-center px-4 py-3  bg-gray-400/20 ">
      <button
        onClick={() => navigate(-1)}
        className="mr-4 text-white hover:text-black transition-colors"
        aria-label="Volver"
      >
        <ArrowLeft className="w-6 h-6 cursor-pointer" />
      </button>

      <h1 className="text-xl font-semibold  text-center flex-1 text-white">
        {title}
      </h1>
    </header>
  );
};
