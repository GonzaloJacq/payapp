import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Pagar from "./pages/pagar";
import Pagos from "./pages/pagos";
import Footer from "./footer";
import Guia from "./pages/guia";

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pagar" element={<Pagar />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/guia" element={<Guia />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}
