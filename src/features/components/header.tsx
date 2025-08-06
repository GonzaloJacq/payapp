import { useShallow } from "zustand/shallow";
import { useAuthStore } from "../store/user.store";
import { useNavigate } from "react-router";

export const Header = ({}) => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore(
    useShallow((state) => ({
      user: state.user,
      logout: state.logout,
    }))
  );
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between text-xl">
      <span>Bienvenido {user}</span>
      <button
        className="text-blue-500 hover:underline cursor-pointer"
        onClick={handleLogout}
      >
        Salir
      </button>
    </div>
  );
};
