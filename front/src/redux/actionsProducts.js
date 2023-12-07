import axios from "axios";
import { CREATE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from "./types";

export const createProductAction = (values) => {
    return async (dispatch) => {
        try {
            let res = await axios.post("http://localhost:3000/api/product", values );
            console.log("ACTION CREATE RESPONSE", res);
            dispatch({ type: CREATE_PRODUCT,  payload: res })
        } catch (error) {
            console.log(error);
        }
    }
};


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

export const getProductDetailAction = (productId, companyId) => {
    return async(dispatch) => {
        try {
            const bddData = await axios.get(`http://localhost:3000/api/product/${productId}/${companyId}`);
            const product = bddData.data;
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: product
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}