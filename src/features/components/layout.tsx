import { Outlet } from "react-router";
import Footer from "./footer";
import { useAuthStore } from "../store/user.store";
import DeniedAcces from "./deniedAccess";
import { Header } from "./header";

export default function Layout() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <DeniedAcces />;
  }

  return (
    <div className="min-h-screen flex flex-col p-4">
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
