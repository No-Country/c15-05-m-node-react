import logo from "../../assets/Imagenes/imgEmpresa.jpg";
import { useState } from "react";
import Header from "../shared/Header/Header";
import { userRegisterAction } from "../../redux/actionsUser";
import { useDispatch } from "react-redux";
import { registerSchema } from "../../Schemas/registerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const dispatch = useDispatch();
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
  console.log(newUser);
  const onSubmit = () => {
    dispatch(userRegisterAction(newUser));
    reset()
  };
  return (
    <>
      <Header />
      <div className="w-full h-screen pt-11 bg-slate-200 ">
        <h1 className="text-4xl text-center font-semibold">
          {" "}
          Registro de Usuario
        </h1>
        <div className="flex place-content-around mt-28">
          <div className=" h-[300px] border border-black flex place-content-center  rounded-xl overflow-hidden">
            <img src={logo} alt="Logo Empresa" className="border rounded-lg " />
          </div>
          <div className="w-[500px]">
            <form
              className="flex flex-col place-content-around gap-6 "
              onChange={handleInputChange}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  className={`border border-gray-500 p-2 rounded-lg  `}
                  id="name"
                  name="name"
                  value={input.name}
                  onChange={handleInputChange}
                  autoComplete="on"
                  {...register("name")} 
                />
                {errors.name && <p className="text-red-600" >{errors.name.message}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Email"
                  className={`border border-gray-500 p-2 rounded-lg  `}
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={handleInputChange}
                  autoComplete="on"
                  {...register("email")} 
                />
                {errors.email && <p className="text-red-600" >{errors.email.message}</p>}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Password"
                  className={`border border-gray-500 p-2 rounded-lg  `}
                  id="password"
                  name="password"
                  value={input.password}
                  onChange={handleInputChange}
                  autoComplete="off"
                  {...register("password")} 
                />
                {errors.password && <p className="text-red-600" >{errors.password.message}</p>}
              </div>
              <div className="w-full flex place-content-center mt-10 ">
                <button
                  type="submit"
                  className="w-[150px] h-[40px] bg-[#4DD0E1] hover:bg-[#B2EBF2] text-white hover:text-[#00bcd4] hover:border border-[#4DD0E1] font-bold text-sm p-4 rounded-md animate-pulse"
                >
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
