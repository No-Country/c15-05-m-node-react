import axios from "axios";
import { getApi } from "./js/axiosConfig";
import { CREATE_PRODUCT } from "./types";

export const createProductAction = (values) => {
    return async (dispatch) => {
        try {
            let res = await axios.post("http://localhost:3000/api/", values );
            console.log("ACTION CREATE RESPONSE", res);
            dispatch({ type: CREATE_PRODUCT,  payload: res })
        } catch (error) {
            console.log(error);
        }
    }
};

export const createProductActionX = (values) => {
    return async (dispatch) => {
        try {
            let res = await getApi({
                method: "POST",
                url: "products",
                post: values,
            })
            console.log("ACTION CREATE RESPONSE", res);
            dispatch({
                type: CREATE_PRODUCT, payload: res,
            })
        } catch (error) {
            console.log(error);
        }
    }
}