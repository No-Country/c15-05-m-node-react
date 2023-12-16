import url from "../config/config";
import axios from "axios";
import { COMPANY_REGISTER,GET_INFO_COMPANY } from "./types";
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

export const getInfoCompanyAction = (id) => {
    return async (dispatch) => {
        try {
            const info = await axios.get(`${url}/api/company/${id}`);
            dispatch({ type: GET_INFO_COMPANY,  payload:info.data})
        } catch (error) {
            console.log(error)
        }
    }
}