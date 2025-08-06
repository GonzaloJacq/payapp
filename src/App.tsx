import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Pagar from "./pages/pagar";
import Guia from "./pages/guia";
import CalculadoraPagos from "./pages/calculadora";
import Login from "./pages/login";
import PrivateLayout from "./features/components/layout";
import Registro from "./pages/registro";
import { LinkPages } from "./routes/routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LinkPages.LOGIN} element={<Login />} />
        <Route path={LinkPages.REGISTRO} element={<Registro />} />
        <Route element={<PrivateLayout />}>
          <Route path={LinkPages.INDEX} element={<Index />} />
          <Route path={LinkPages.PAGAR} element={<Pagar />} />
          <Route path={LinkPages.GUIA} element={<Guia />} />
          <Route path={LinkPages.CALCULADORA} element={<CalculadoraPagos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
