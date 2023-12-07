import { CREATE_PRODUCT, GET_ALL_PRODUCTS, USER_REGISTER, GET_PRODUCT_DETAIL, COMPANY_REGISTER } from "./types";

const initialState = {
  //DATOS DE LA COMPAÑIA
  company: {},
  //DATOS DEL USUARIO
  user: {},
  //TODOS LOS PRODUCTOS DE UNA COMPAÑIA
  products: [],
  //DETALLE DE UN PRODUCTO
  productDetail: {}
};

export const reducerCompany = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_REGISTER:
      return {
        ...state,
        company: action.payload,
      };

    default:
      return { ...state };
  }
};

export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
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
//OBTENER DETALLE DE PRODUCTO
        case GET_PRODUCT_DETAIL:
          return {
            ...state,
            productDetail: action.payload
          }
    default:
      return { ...state };
  }
};
