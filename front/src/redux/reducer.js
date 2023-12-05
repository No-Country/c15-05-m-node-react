import { CREATE_PRODUCT, USER_LOGIN } from "./types";

const initialState = {
  user: {},
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
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    default:
      return { ...state };
  }
};
