import { Body } from "../features/components/body";
import moneyLogo from "../assets/fly-money.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
type FormInputs = {
  user: string;
  password: string;
};
export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log("user: ", data);
    navigate("/");
  };

  return (
    <Body>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <img src={moneyLogo} className="h-32 w-32 " alt="React logo" />
        </div>
        <h1 className="text-5xl">My Payapp</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="gap-4 flex flex-col">
          <div>
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
    </Body>
  );
}
