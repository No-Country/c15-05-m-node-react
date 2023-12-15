import url from "../config/config";
import axios from "axios";
import { COMPANY_REGISTER, GET_COMPANY } from "./types";
import { sweetAlertsSuccessfully, sweetAlertsError } from "../components/Utils/alerts/sweetAlerts";

export const companyRegisterAction = (input, userId) => {
    return async (dispatch) => {
        try {
            const register = await axios.post(`${url}/api/register/company/${userId}`, input );
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

export const getCompanyAction = (companyId) => {
    return async(dispatch) => {
        try {
            const res = await axios.get(`${url}/api/company/${companyId}`);
            dispatch({ type: GET_COMPANY, payload: res.data})
        } catch (error) {
            console.log(error.response);
            console.log(error.message);
        }
    }
}
