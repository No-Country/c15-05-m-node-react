import imageLanding from "../../assets/LandingNew/Landing.jpeg";
import { useState } from "react";
import Header from "../shared/Header/Header";
import { userRegisterAction } from "../../redux/actionsUser";
import { useDispatch } from "react-redux";
import { registerSchema } from "../../Schemas/registerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const newUser = {
    name: input.name,
    email: input.email,
    password: input.password,
  };
  const onSubmit = () => {
    dispatch(userRegisterAction(newUser));
    reset();
    setInput({
      name: "",
      email: "",
      password: "",
    });
    navigate("/register-company");
  };

  return (
    <div className="w-full h-screen">
      <Header showDown={false} />
      <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 -z-10">
    <img
      src={imageLanding}
      alt="Imagen de fondo empresa"
      className="w-full h-screen object-cover"
    />
  </div>
        <div className="w-full md:w-1/2 px-20
        pb-60 overflow-y-auto fixed top-16 right-0 bottom-0 flex flex-col items-center justify-center">
          <h1 className="mb-10 text-4xl text-center font-semibold text-white md:text-black">
            Registro de Usuario
          </h1>
          <div className="md:w-[30em]">
            <form
              className="flex flex-col place-content-around gap-6 mx-[1em]"
              onChange={handleInputChange}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className="border border-gray-500 p-2 rounded-lg w-full"
                  id="name"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                  autoComplete="on"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  placeholder="Email"
                  className={`border border-gray-500 p-2 rounded-lg  `}
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                  autoComplete="on"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  placeholder="Password"
                  className={`border border-gray-500 p-2 rounded-lg  `}
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  autoComplete="off"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <div className="w-full flex place-content-center text-center mt-10 ">
                <button
                  type="submit"
                  className="w-[150px] h-[40px] bg-[#4DD0E1] hover:bg-[#B2EBF2] text-white hover:text-[#00bcd4] border-[#4DD0E1] font-bold text-sm rounded-md animate-pulse"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
