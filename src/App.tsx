// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index";
import Pagar from "./pages/pagar";
import Pagos from "./pages/pagos";
import Guia from "./pages/guia";
import Layout from "./pages/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/pagar" element={<Pagar />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/guia" element={<Guia />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
