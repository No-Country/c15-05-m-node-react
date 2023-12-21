// import React, { useState } from "react";
import logo from '../../assets/Imagenes/logo.png'
import { useDispatch, useSelector } from "react-redux";
import {  userLoginAction } from "../../redux/actionsUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Header from '../shared/Header/Header';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [ userLogin, setUserLogin ] = useState();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
// console.log("USER STATE LOGIN", user);
  const handleInputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

     const res = await dispatch(userLoginAction(loginData))
     if(res){
      if(!res.data.EUA && !res.data.UA){
        return navigate("/register-company")
      }else if(res.data.UA){
        return navigate("/ua/landing")
      }else if (res.data.EUA){
        return navigate("/eua/dashboard")
      }
     }
    setLoginData({
      email: "",
      password: "",
    });
  };



  return (
    <>
    <Header showDown={false}/>
    <div className="w-full h-screen pt-11 bg-slate-200 ">
       
      <div className="flex place-content-around mt-28">
        <div className="">
          <div className="h-[300px] border  flex place-content-center rounded-xl  shadow shadow-gray-500 overflow-hidden">
            <img src={logo} alt="Logo Empresa" className="rounded-xl" />
          </div>
        </div>

        <div className="w-[500px]">
          <h1 className="text-4xl text-center p-5 font-barlow-condensed font-semibold">Acceso de Usuario</h1>
          <form
            className="flex flex-col place-content-around gap-6 font-roboto"
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
  
    </>);
};

export default Login;

