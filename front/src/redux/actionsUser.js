import axios from "axios";
import { USER_LOGOUT, USER_REGISTER } from "./types";
import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";
import url from "../config/config";


export const userRegisterAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/api/register`, values);
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

// export const userLoginAction = (values) => {
//   return async (dispatch) => {
//     try {
//       let res = await axios.post(`${url}/login`, values);
//       dispatch({ type: USER_LOGIN, payload: res.data });
//       sweetAlertsSuccessfully(
//         `Bienvenido(a) ${res.data.name}!`,
//         "Nos alegra su regreso",
//         "Ok"
//         )
        
//     } catch (error) {
//       console.log(error);
//       sweetAlertsError(error, "Intentar de nuevo", "OK");
//     }
//   };
// };
export const userLogoutAction = () => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/logout`);
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