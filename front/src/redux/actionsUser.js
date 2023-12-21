import axios from "axios";
import {
  USER_LOGOUT,
  USER_REGISTER,
  USER_LOGIN,
  USER_REGISTER_STATUS,
} from "./types.js";

import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";
import url from "../config/config";

export const userRegisterAction = (values) => {
  const getStatus = () => ({ type: USER_REGISTER_STATUS, payload: "true" });
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/api/register`, values);
      dispatch({ type: USER_REGISTER, payload: res.data.user });
      dispatch(getStatus());
      sweetAlertsSuccessfully(
        `Registro de ${values.name} exitoso!`,
        "Ahora registremos su empresa",
        "Ok"
      );
     
    } catch (error) {
      
      dispatch({
        type: USER_REGISTER_STATUS,
        payload: error.response.data.success,
      });
      console.log("RESPONSE.DATA.ERROR", error.response.data);
      sweetAlertsError(error.response.data.message, "El correo ya está en uso", "OK");
    }
  };
};

export const userLoginAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/api/login`, values);
      dispatch({ type: USER_LOGIN, payload: res.data });
      sweetAlertsSuccessfully(
        `Login exitoso`,
        `Bienvenido ${res.data.name}`,
        "Ok"
      );
      return res
    } catch (error) {
      console.log(error);
      sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
    }
  };
};
export const userLogoutAction = () => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/api/logout`);
      dispatch({ type: USER_LOGOUT, payload: res });
      console.log("RESPUESTA AXIOS", res);
      sweetAlertsSuccessfully(`Hasta pronto!`, "Recuerde volver");
    } catch (error) {
      console.log(error);
      sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
    }
  };
};


export const verifyToken = async ()=> {
  try {
    let res = await axios.get(`${url}/api/verify`)
    return res
  } catch (error) {
    console.log(error)
    sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK")
  }
}

export const registerEUA = async (data)=>{
  try {
    let res = await axios.post(`${url}/api/register`, data);
    return res
  } catch (error) {
   sweetAlertsError("Error",error.response.data.message,"Ok")
  }
}