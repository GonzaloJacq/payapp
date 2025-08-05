import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Pagar from "./pages/pagar";
import Pagos from "./pages/pagos";
import Guia from "./pages/guia";
import CalculadoraPagos from "./pages/calculadora";
import Login from "./pages/login";
import PrivateLayout from "./privateLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Index />} />
          <Route path="/pagar" element={<Pagar />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/guia" element={<Guia />} />
          <Route path="/calculadora" element={<CalculadoraPagos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
