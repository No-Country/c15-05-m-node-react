import axios from "axios";
import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAIL,
  SORT_BY_PRICE,
  SORT_BY_STOCK,
  EDIT_PRODUCT,
  FILTER_BY_CATEGORY,
  SORT_BY_NAME,
} from "./types";

import url from "../config/config";
import {
  sweetAlertsSuccessfully,
  sweetAlertsError,
} from "../components/Utils/alerts/sweetAlerts";

export const createProductAction = (values) => {
  return async (dispatch) => {
    try {
      let res = await axios.post(`${url}/api/product`, values);
      dispatch({ type: CREATE_PRODUCT, payload: res.data });
      sweetAlertsSuccessfully("Felicidades", res.data.message, "Ok");
    } catch (error) {
      console.log(error);
      sweetAlertsError(
        "Uh... intenta de nuevo",
        "No pudimos crear el nuevo producto",
        "Ok"
      );
    }
  };
};

export const getAllProductsAction = (companyId) => {
    return async(dispatch) => {
        try {
            const bddData = await axios.get(`${url}/api/products/${companyId}`);
            const allProducts = bddData.data;
            dispatch({
                type: GET_ALL_PRODUCTS,
                payload: allProducts
            })
        } catch (error) {
            //console.log(error.message)
            sweetAlertsError(
              "Uh... intenta de nuevo",
              "No podemos mostrar tus productos",
              "Ok"
            );
        }
    }
  };


export const getProductDetailAction = (detailId, companyId) => {
 //console.log("recibe el dispatch");
 //console.log("product id action :", detailId);
 //console.log("company id action: ", companyId);
    return async(dispatch) => {
        try {
            const bddData = await axios.get(`${url}/api/product/${detailId}/${companyId}`);
            //console.log("getAxios: ", bddData);
            const product = bddData.data;
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: product
            })
        } catch (error) {
            console.log(error.message);
            sweetAlertsError(
              "Uh... intenta de nuevo",
              "No podemos mostrar tu producto",
              "Ok"
            );
        }
    }
}
 export const sortByPriceAction = (value) => {
  //console.log("llega a la action con value: ", value);
  //console.log('envio la action al reducer');
    return {
        type: SORT_BY_PRICE,
        payload: value 
    }
  };

export const sortByStockAction = (value) => {
  return {
    type: SORT_BY_STOCK,
    payload: value,
  };
};

export const sortByNameAction = (value) => {
  return {
    type: SORT_BY_NAME,
    payload: value,
  };
};

export const editProductAction = (id, values) => {
  return async (dispatch) => {
    try {    
      let res = await axios.put(`${url}/api/product/${id}`, values);
      dispatch({ type: EDIT_PRODUCT, payload: res.data });
      sweetAlertsSuccessfully("Producto Actualizado", res.data.message, "Ok");
    } catch (error) {
      console.log(error);
      sweetAlertsError(
        "Uh... intenta de nuevo",
        "No pudimos editar el producto",
        "Ok"
      );
    }
  };
}

export const filterByCategoryAction = (value) => {
  //console.log('recibe el dispatch');
  //console.log('value recibido: ', value);
  //console.log('envio action al reducer');
  return {
    type: FILTER_BY_CATEGORY,
    payload: value
  }
}

