// src/PrivateLayout.tsx
import { Outlet } from "react-router";
import Footer from "./footer";
import { useAuthStore } from "./features/store/user.store";
import DeniedAcces from "./features/components/deniedAccess";

export default function PrivateLayout() {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <DeniedAcces />;
  }

  return (
    <div className="min-h-screen flex flex-col p-4">
      <span className="flex justify-end items-end text-xl">
        Bienvenido {user}
      </span>
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
