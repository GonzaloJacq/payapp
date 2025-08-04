import { Outlet } from "react-router";
import Footer from "../footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col p-4">
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
