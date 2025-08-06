import { Body } from "../features/components/body";
import moneyLogo from "../assets/fly-money.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthStore } from "../features/store/user.store";
import { useShallow } from "zustand/shallow";
import Footer from "../features/components/footer";
import { LinkPages } from "../routes/routes";
type FormInputs = {
  user: string;
  password: string;
};
export default function Login() {
  const navigate = useNavigate();
  const { setCredentials } = useAuthStore(
    useShallow((state) => ({
      setCredentials: state.setCredentials,
    }))
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log("user: ", data);
    setCredentials(data.user);
    navigate(LinkPages.INDEX);
  };
  const handleRegister = () => {
    navigate(LinkPages.REGISTRO);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Body>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="flex flex-col gap-4 max-w-md w-full">
            <div className="flex justify-center flex-col items-center">
              <img src={moneyLogo} className="h-32 w-32 " alt="React logo" />
              <h1 className="text-5xl">My Payapp</h1>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="gap-4 flex flex-col"
            >
              <div>
                <label htmlFor="user" className="block mb-1 font-medium ">
                  Nombre de usuario
                </label>
                <input
                  className="w-full p-2 border rounded"
                  step={"0.01"}
                  min="0"
                  type="text"
                  id="user"
                  {...register("user", {
                    required: "Ingrese el nombre de usuario",
                    min: {
                      value: 3,
                      message: "Debe contener al menos 3 caracteres",
                    },
                  })}
                />
                {errors.user && (
                  <p className="text-red-600 mt-1">{errors.user.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="user" className="block mb-1 font-medium ">
                  Contraseña
                </label>
                <input
                  className="w-full p-2 border rounded"
                  step={"0.01"}
                  min="0"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Ingrese el nombre la contraseña",
                    min: {
                      value: 3,
                      message: "Debe contener al menos 3 caracteres",
                    },
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-red-600 mt-1">{errors.password.message}</p>
              )}
              <div className="justify-between flex">
                <button
                  type="button"
                  className="hover:text-blue-500 cursor-pointer transition"
                  onClick={handleRegister}
                >
                  registrarse
                </button>
                <button
                  type="submit"
                  className="bg-green-600 w-16 text-white py-2 rounded hover:bg-green-700 transition cursor-pointer"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Body>
      <Footer />
    </div>
  );
}
