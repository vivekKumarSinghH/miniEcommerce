import { GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, SET_PAGE } from "./Actions";

const init = {
  loading: false,
  currentPage:1,
  numberOfPage:1,
  products: []
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING:
      return { ...state, loading: true };

    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: payload.data,numberOfPage:payload.totalPages, loading: false };
      case SET_PAGE:
        return { ...state, currentPage:payload };
      default:
      return state;
  }
};
