import { Body } from "../features/components/body";
import moneyLogo from "../assets/fly-money.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Footer from "../features/components/footer";
import Swal from "sweetalert2";
import { LinkPages } from "../routes/routes";
type FormInputs = {
  user: string;
  email: string;
  password1: string;
  password2: string;
};
export default function Registro() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const password = watch("password1");

  const onSubmit = (data: FormInputs) => {
    console.log("Registro: ", data);
    Swal.fire({
      title: "Registro exitoso",
      text: "Tu cuenta ha sido creada correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#22C55E",
    }).then(() => {
      navigate(LinkPages.LOGIN);
    });
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
                    minLength: {
                      value: 4,
                      message: "Debe contener al menos 4 caracteres",
                    },
                  })}
                />
                {errors.user && (
                  <p className="text-red-600 mt-1">{errors.user.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium ">
                  Email
                </label>
                <input
                  className="w-full p-2 border rounded"
                  step={"0.01"}
                  min="0"
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Ingrese un email válido",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Formato de email no válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-600 mt-1">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="password1" className="block mb-1 font-medium ">
                  Contraseña
                </label>
                <input
                  className="w-full p-2 border rounded"
                  step={"0.01"}
                  min="0"
                  type="password"
                  id="password1"
                  {...register("password1", {
                    required: "Ingrese una contraseña",
                    minLength: {
                      value: 8,
                      message: "Debe contener al menos 8 caracteres",
                    },
                  })}
                />
              </div>
              {errors.password1 && (
                <p className="text-red-600 mt-1">{errors.password1.message}</p>
              )}
              <div>
                <label htmlFor="password2" className="block mb-1 font-medium ">
                  Confirmar contraseña
                </label>
                <input
                  className="w-full p-2 border rounded"
                  step={"0.01"}
                  min="0"
                  type="password"
                  id="password2"
                  {...register("password2", {
                    required: "Confirme la contraseña",
                    validate: (value) =>
                      value === password || "Las contraseñas no coinciden",
                  })}
                />
              </div>
              {errors.password2 && (
                <p className="text-red-600 mt-1">{errors.password2.message}</p>
              )}
              <div className="flex justify-between items-center mt-4">
                <button
                  type="button"
                  className="text-blue-600 hover:underline transition"
                  onClick={() => navigate(LinkPages.LOGIN)}
                >
                  Ya tengo cuenta
                </button>
                <button
                  type="submit"
                  className="bg-green-600 w-24 text-white py-2 rounded hover:bg-green-700 transition"
                >
                  Registrar
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
