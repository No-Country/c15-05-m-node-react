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
      let res = await axios.post(`${url}/api/login`, values);
      console.log(res);
      console.log(res.data);
      dispatch({ type: USER_LOGIN, payload: res.data });
      sweetAlertsSuccessfully(
      `Login exitoso`,
      `Bienvenido ${values.name}`,
        "Ok"
      );
    } catch (error) {
      console.log(error.response);
      console.log(error.message);
      sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
    }
  };
};
