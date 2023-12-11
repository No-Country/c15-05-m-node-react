import React from "react";
import ButtonBack from "../Utils/Buttons/ButtonBack"
//import Header from '../shared/Header/Header'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validationRC from "../Utils/validaciones/validacionRC";
import {companyRegisterAction} from "../../redux/actionsCompany"
import { sweetAlertsSuccessfully } from "../Utils/alerts/sweetAlerts"

const RegisterCompany = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  //ESTADO QUE MANEJA LOS INPUTS
  const [input, setInput ] = useState({
    name: "",
    sector: "",
    country: "",
    // email: "",
    // password:"",
    // image:{}
  });
  
  //ESTADO QUE MANEJA ERRORES
  const [errors, setErrors ] = useState({
    name: "",
    sector: "",
    country: "",
    // email: "",
    // password:"",
    // image:{}
  });  
  
  
  const inputHandler = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
    setErrors(validationRC({
      ...input,
      [e.target.name] : e.target.value
      
    }));
  }
  
  //useEffect que escucha los estados locales input y errors para setear el estado FormComplete
  const [formComplete, setFormComplete] = useState(false); //estodo local para manejar el boton del submit y el envio de datos
  
  useEffect(() => {
    let values = Object.values(input);
    let notComplete =  values.filter( value => value === "")
    console.log(notComplete);
    let error = Object.keys(errors);
    if(!notComplete.length && !error.length) setFormComplete(true)
  }, [input, errors, formComplete])

//handler del submit ==> si fomrComplete es true despacha la action PostActivity, setea Success en true, setea input y errors al estado inicial
const userId = useSelector(state => state.user._id);
const [success, setSuccess] = useState(false); // estado local para manejar la alerta de ok

const submitHandler = (e) => {
  e.preventDefault();
  if(formComplete) {
        dispatch(companyRegisterAction(input, userId));
        setInput({
          name: '',
          sector: '',
          country: '',
          // email: "",
          // password:"",
          // image:{}
        });
        setErrors({
          name: '',
          sector: '',
          country: '',
          // email: "",
          // password:"",
          // image:{}
        });  
        setTimeout(function(){
            navigate('/login') 
        }, 2000)

    } 
  }

  return (
    <div className='w-full h-screen pt-11 bg-slate-200 '>
      <div className="ml-20">
        <ButtonBack />
      </div>
      <h1 className='text-4xl text-center font-semibold'> Registro de Empresa</h1>
      <div className='flex place-content-around mt-28'>
        <div className='w-[500px]'>
          <form className= 'flex flex-col place-content-around gap-6 ' onSubmit={submitHandler}>
              <div className="flex flex-col">
                <input type="text" placeholder='Nombre de la empresa'
                className={`border border-black p-2 m-2 rounded-lg `}
                id='name' name="name" value={input.name} onChange={inputHandler}
                /> 
                {errors.name ? <p className= "text-xs text-pink-700">{errors.name}</p> : null}
              </div>
              <div className="flex flex-col">
                <input type="text" placeholder='Industria'
                className={`border border-black p-2 m-2 rounded-lg `}
                id='sector' name="sector" value={input.sector} onChange={inputHandler}
                />
                {errors.sector ? <p className= "text-xs text-pink-700">{errors.sector}</p> : null}
              </div>
              <div className="flex flex-col">
                <input type="text" placeholder='País de origen'
                className={`border border-black p-2 m-2 rounded-lg `}
                id='country' name="country" value={input.country} onChange={inputHandler}
                />
                {errors.country ? <p className= "text-xs text-pink-700">{errors.country}</p> : null}
              </div>
              {/* <div className="flex flex-col">
                <input type="text" placeholder='Email'
                className={`border border-black p-2 m-2 rounded-lg`}
                 id='email' 
                />
              </div> 
              <div className="flex flex-col">
                <input type="text" placeholder='password'
                className={`border border-black p-2 m-2 rounded-lg `}
                id='password'
                />
              </div> */}
          </form>
        </div>         <div>
          <div className='w-[450px] h-[250px] flex place-content-center  border border-black rounded-xl overflow-hidden'>
            <button type="submit"
            className=" h-[50px] self-end bg-[#4DD0E1] hover:bg-blue-400 text-black font-bold text-sm p-4 mb-4 rounded"
            >
              Agregar Logo
            </button>
          </div>
          <div className='w-full flex place-content-center mt-10 '>
            <button type="submit" disabled={!formComplete} className={`w-[150px] h-[50px] text-black font-bold text-sm p-4 rounded
            ${formComplete ? 'bg-[#4DD0E1] hover:bg-blue-400' : 'bg-gray-400 cursor-not-allowed'}`}>Enviar</button>
          </div>    
        </div>
      </div>
    </div>   
  )
}

export default RegisterCompany;