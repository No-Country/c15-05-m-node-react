import axios from "axios";
import { COMPANY_REGISTER } from "./types";
import { sweetAlertsSuccessfully, sweetAlertsError } from "../components/Utils/alerts/sweetAlerts";

export const companyRegisterAction = (input, userId) => {
    return async (dispatch) => {
        try {
            const register = await axios.post(`http://localhost:3000/api/register/company/${userId}`, input );
            dispatch({ type: COMPANY_REGISTER,  payload: register })
            sweetAlertsSuccessfully(
                `Registro de ${input.name} exitoso!`,
                "Ahora ingrese y comience su gestión",
                "Ok"
              )
        } catch (error) {
            sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
        }
    }
}