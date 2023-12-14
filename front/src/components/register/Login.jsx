// import React, { useState } from "react";
import logo from '../../assets/Imagenes/imgEmpresa.jpg'
import { useDispatch, useSelector } from "react-redux";
import {  userLoginAction } from "../../redux/actionLogin";
import { useEffect, useState } from "react";
// import {  userLoginAction } from "../../redux/actionsUser";//Recomiendo usar esta action, está en la carpeta correcta y la respuesta es la que necesitamos para manejear la data
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [ userLogin, setUserLogin ] = useState();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
console.log("USER STATE LOGIN", user);
  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();

    dispatch(userLoginAction(loginData));
    setLoginData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    setUserLogin(user)
    if (userLogin) {
      navigate(userLogin.UA === true ? "/ua/landing" : null || userLogin.EUA === true ? "/eua/dashboard" : null);
    }
    console.log("USER", user);
  }, [user, userLogin, navigate]);

  return (
    <div className="w-full h-screen pt-11 bg-slate-200 ">
      <div className="flex place-content-around mt-28">
        <div className="">
          <div className="h-[300px] border border-black flex place-content-center rounded-xl overflow-hidden">
            <img src={logo} alt="Logo Empresa" className="border rounded-lg " />
          </div>
        </div>

        <div className="w-[500px]">
          <h1 className="text-4xl text-center p-5">Acceso de Usuario</h1>
          <form
            className="flex flex-col place-content-around gap-6 "
            onSubmit={handleLogin}
          >
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Email"
                className={`border border-black p-2 rounded-lg `}
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="password"
                placeholder="Password"
                className={`border border-black p-2 rounded-lg `}
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleInputChange}
              />
            </div>

            <button
              type="submit"
              className="w-[150px] h-[50px]  bg-[#4DD0E1] hover:bg-gray-400 text-black font-bold text-sm p-4 rounded"
            >
              Enviar
            </button>
          </form>
          <div className="w-full flex place-content-center mt-10 "></div>
        </div>
      </div>
    </div>
  );
};

export default Login;

