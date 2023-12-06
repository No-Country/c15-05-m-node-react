import axios from "axios";
import { USER_REGISTER } from "./types";
import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";

export const userRegisterAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post("http://localhost:3000/api/register", values);
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