import axios from "axios";
import { USER_LOGIN } from "./types";
import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";
import url from "../config/config";


export const userLoginAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/login`, values);
      dispatch({ type: USER_LOGIN, payload: res });
      sweetAlertsSuccessfully(
      `Login exitoso`,
      `Bienvenido ${values.name}`,
        "Ok"
      );
    } catch (error) {
      console.log(error);
      sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
    }
  };
};
