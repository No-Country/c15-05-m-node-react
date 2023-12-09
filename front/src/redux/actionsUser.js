import axios from "axios";
import { USER_LOGIN, USER_REGISTER } from "./types";
import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";
import url from "../config/config";


export const userRegisterAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/register-user`, values);
      dispatch({ type: USER_REGISTER, payload: res });
      sweetAlertsSuccessfully(
        `Registro de ${values.name} exitoso!`,
        "Ahora registremos a su empresa",
        "Ok"
      );
    } catch (error) {
      console.log(error);
      sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
    }
  };
};

export const userLoginAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/login`, values);
      dispatch({ type: USER_LOGIN, payload: res.data });
      console.log("RESPUESTA AXIOS", res);
      sweetAlertsSuccessfully(
        `Bienvenido(a) ${res.data.name}!`,
        "Nos alegra su regreso",
        "Ok"
      );
    } catch (error) {
      console.log(error);
      sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
    }
  };
};