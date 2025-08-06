import { useShallow } from "zustand/shallow";
import { useAuthStore } from "../store/user.store";
import { useNavigate } from "react-router";
import { User } from "lucide-react";
import { LinkPages } from "../../routes/routes";

export const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore(
    useShallow((state) => ({
      user: state.user,
      logout: state.logout,
    }))
  );
  const handleLogout = () => {
    logout();
    navigate(LinkPages.LOGIN);
  };

  return (
    <div className="flex items-center justify-between text-xl">
      <div className="flex gap-2">
        <User className="mt-0.5" /> {user}
      </div>
      <button
        className="text-blue-500 hover:underline cursor-pointer"
        onClick={handleLogout}
      >
        Salir
      </button>
    </div>
  );
};
