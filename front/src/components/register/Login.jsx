import logo from "../../assets/Imagenes/imgEmpresa.jpg";
import { useState } from "react";
import { userLoginAction } from "../../redux/actionsUser";
import { useDispatch, useSelector } from "react-redux";
import { userLoginSchema } from "../../Schemas/loginSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useSelector((state) => state.login);
  console.log("USER LOGIN STATE", user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(userLoginSchema),
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const userLogin = {
    email: input.email,
    password: input.password,
  };
  console.log("USER LOGIN", userLogin);
  const onSubmit = () => {
    dispatch(userLoginAction(userLogin));
    // if (user.UA === true) {
    //   navigate("/ua/landing");
    // } else if (user.EUA === true) {
    //   navigate("/");
    // } else {
    //   navigate("/login");
    // }
    navigate("/ua/landing");
    reset();
    setInput({
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-full h-screen pt-11 bg-slate-200 ">
      <div className="flex place-content-around mt-28">
        <div className="">
          <div className=" h-[300px] border border-black flex place-content-center  rounded-xl overflow-hidden">
            <img src={logo} alt="Logo Empresa" className="border rounded-lg " />
          </div>
        </div>

        <div className="w-[500px]">
          <h1 className="text-4xl text-center p-5">Acceso de Usuario</h1>
          <form
            onChange={handleInputChange}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col place-content-around gap-6 "
          >
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Correo electrónico"
                className={`border border-black p-2 rounded-lg `}
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
                className={`border border-black p-2 rounded-lg `}
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
          <div className="w-full flex place-content-center mt-10 ">
            <button
              type="submit"
              className="w-[150px] h-[50px]  bg-[#4DD0E1] hover:bg-gray-400 text-black font-bold text-sm p-4 rounded"
            >
              Enviar
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
