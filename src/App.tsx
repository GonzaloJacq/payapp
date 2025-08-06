import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Pagar from "./pages/pagar";
import Guia from "./pages/guia";
import CalculadoraPagos from "./pages/calculadora";
import Login from "./pages/login";
import PrivateLayout from "./features/components/layout";
import Registro from "./pages/registro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/pagar" element={<Pagar />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/calculadora" element={<CalculadoraPagos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
