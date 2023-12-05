import axios from "axios";
import { getApi } from "../config/axiosConfig";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS } from "./types";

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

export const getAllProductsAction = (companyId) => {
    return async(dispatch) => {
        try {
            const bddData = await axios.get(`http://localhost:3000/api/products/${companyId}`);
            const allProducts = bddData.data;
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: allProducts
            })
        } catch (error) {
            console.log(error.message)
            //instalar libreria para alerta de errores(sprint 3 ó 4)
        }
    }
}