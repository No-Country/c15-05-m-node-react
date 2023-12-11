import url from "../config/config";
import { COMPANY_REGISTER } from "./types";

export const companyRegisterAction = (input, userId) => {
    return async (dispatch) => {
        try {
            const register = await axios.post(`${url}/api/register/company/${userId}`, input );
            dispatch({ type: COMPANY_REGISTER,  payload: register })
        } catch (error) {
            console.log(error.message);
        }
    }
}