import { CREATE_PRODUCT, USER_LOGIN, GET_ALL_PRODUCTS } from "./types";

const initialState = {
  //DATOS DE LA COMPAÑIA
  company: {},
  //DATOS DEL USUARIO
  user: {},
  //TODOS LOS PRODUCTOS DE UNA COMPAÑIA
  products: [],
};

export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return { ...state };
  }
};

export const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
//CREACION DE PRODUCTO
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
//OBTENER TODOS LOS PRODUCTOS DE UNA COMPAÑIA
      case GET_ALL_PRODUCTS:
        return {
          ...state, 
          products: action.payload
        }

    default:
      return { ...state };
  }
};
