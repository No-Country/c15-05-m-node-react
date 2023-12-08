import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  USER_REGISTER,
  GET_PRODUCT_DETAIL,
  COMPANY_REGISTER,
  USER_LOGIN,
  SORT_BY_NAME,
  SORT_BY_PRICE,
  SORT_BY_STOCK
} from "./types";


const initialState = {
  //DATOS DE LA COMPAÑIA
  company: {},
  //DATOS DEL USUARIO
  user: {},
  //TODOS LOS PRODUCTOS DE UNA COMPAÑIA
  products: [],
  //DETALLE DE UN PRODUCTO
  productDetail: {},
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
//OBTENER DETALLE DE PRODUCTO
        case GET_PRODUCT_DETAIL:
          return {
            ...state,
            productDetail: action.payload
          }
//ORDEN POR PRECIO
        case SORT_BY_PRICE:
          let sortArray = action.payload === 'Asc' ?
          state.products.sort((a, b) => {
             return a.price - b.price
          }) :
          state.products.sort((a, b) => {
              return b.price - a.price
          });
          return  {
              ...state,
              products: [...sortArray] //asigno la referencia de sortArray y no modifico el estado original
          };
//ORDEN POR NOMBRE
        case SORT_BY_NAME:
          let sortNameArray = action.payload === 'Asc' ?
          state.products.sort((a, b) => {
              if(a.name > b.name) {return 1}
              if(b.name > a.name) {return -1}
              return 0
          }) :
          state.products.sort((a, b) => {
              if(b.name > a.name) {return 1}
              if(a.name > b.name) {return -1}
              return 0
          })
          return {
              ...state, 
              products: [...sortNameArray]
          }
//ORDEN POR STOCK
        case SORT_BY_STOCK:
          let sortStockArray = action.payload === 'Asc' ?
            state.products.sort((a, b) => {
            return a.quantity - b.quantity
          }) :
            state.products.sort((a, b) => {
            return b.quantity - a.quantity
          });
         return  {
          ...state,
          products: [...sortStockArray] 
  };          

    default:
      return { ...state };
  }
};
