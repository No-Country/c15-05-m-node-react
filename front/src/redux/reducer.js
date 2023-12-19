import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  USER_REGISTER,
  GET_PRODUCT_DETAIL,
  COMPANY_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
  SORT_BY_PRICE,
  SORT_BY_STOCK,
  GET_COMPANY,
  EDIT_PRODUCT,
  FILTER_BY_CATEGORY,
  USER_REGISTER_STATUS,
} from "./types";

const initialState = {
  userRegister: "",

  company: {},

  user: {},

  allProducts: [],

  productDetail: {},

  products: []

};
export const reducerCompany = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_REGISTER:
      return {
        ...state,
        company: action.payload,
      };
    case GET_COMPANY:
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
    case USER_REGISTER_STATUS:
      return {
        ...state,
        userRegister: action.payload,
      };
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
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
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
        allProducts: [...state.allProducts, action.payload],
      };
    //OBTENER TODOS LOS PRODUCTOS DE UNA COMPAÑIA
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    //OBTENER DETALLE DE PRODUCTO
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    //ORDEN POR PRECIO
    case SORT_BY_PRICE:
      console.log(typeof initialState.products); // objeto
      console.log(typeof state.products); //string?
      //por eso en esta funcion voy usar initialState
      // eslint-disable-next-line no-case-declarations
      let sortArray =
        action.payload === "Asc"
          ? initialState.products.sort((a, b) => {
              return a.price - b.price;
            })
          : initialState.products.sort((a, b) => {
              return b.price - a.price;
            });
      //console.log(sortArray);
      return {
        ...initialState,
        products: [...sortArray], //asigno la referencia de sortArray y no modifico el estado original
      };
    //ORDEN POR STOCK
    case SORT_BY_STOCK:
      //IDEM CASE ANTERIOR CON TYPEOF
      // eslint-disable-next-line no-case-declarations
      let sortStockArray =
        action.payload === "Asc"
          ? initialState.products.sort((a, b) => {
              return a.quantity - b.quantity;
            })
          : initialState.products.sort((a, b) => {
              return b.quantity - a.quantity;
            });
      //console.log(sortStockArray);
      return {
        ...initialState,
        products: [...sortStockArray],
      };
    //FILTRAR POR CATEGORIA:
    case FILTER_BY_CATEGORY:
      //console.log('entro al reducer, con value: ', action.payload);
      // eslint-disable-next-line no-case-declarations
      const allProducts = initialState.allProducts;
      //console.log('PRODUCTOS: ', allProducts);
      // eslint-disable-next-line no-case-declarations
      const filtered =
        action.payload === "all"
          ? allProducts
          : allProducts.filter((product) =>
              product.category.includes(action.payload)
            );
      //console.log('ARRAY FILTRADO:', filtered);
      return {
        ...state,
        products: filtered,
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        products: [
          ...state,
          action.payload.slice(0, action.payload),
          action.payload.slice(action.payload + 1),
        ],
      };
    default:
      return { ...state };
  }
};
