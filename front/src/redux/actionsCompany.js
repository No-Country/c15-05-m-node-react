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
export const getCompanyAction = (companyID) => {
    return async (dispatch) => {
        try {
            // console.log("COMPANY ID ACTIONS", companyID)
            const company = await axios.get(`${url}/api/company/${companyID}` );
            dispatch({ type: GET_COMPANY,  payload: company.data})
            // console.log("COMPANY INFO ACTIONS", company.data)
        } catch (error) {
            sweetAlertsError(error.response.data.message, "Intentar de nuevo", "OK");
        }
    }
}

export const getEmployesAction = async (id)=>{
    try {
        const data = await axios.get(`${url}/api/company/employes/${id}`)
        return data.data
    } catch (error) {
        console.log(error)
    }
}
