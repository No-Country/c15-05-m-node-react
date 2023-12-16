import axios from "axios";
import { USER_LOGOUT, USER_REGISTER, USER_LOGIN } from "./types.js";

import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";
import url from "../config/config";


export const userRegisterAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/api/register`, values);
      dispatch({ type: USER_REGISTER, payload: res.data });

      sweetAlertsSuccessfully(
        `Registro de ${values.name} exitoso!`,
        "Ahora registremos su empresa",
        "Ok"
      );
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      sweetAlertsError(error.message, "Intentar de nuevo", "OK");
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
      sweetAlertsSuccessfully(
        `Hasta pronto!`,
        "Recuerde volver",
      );
    } catch (error) {
      console.log(error);
      sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
    }
  };
};

