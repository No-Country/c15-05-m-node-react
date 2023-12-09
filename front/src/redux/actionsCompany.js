import { COMPANY_REGISTER } from "./types";

export const companyRegisterAction = (input, userId) => {
    return async (dispatch) => {
        try {
            const register = await axios.post(`http://localhost:3000/api/register/company/${userId}`, input );
            dispatch({ type: COMPANY_REGISTER,  payload: register })
        } catch (error) {
            console.log(error.message);
        }
    }
}