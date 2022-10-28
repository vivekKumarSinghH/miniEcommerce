import { ADD_PRODUCT_TO_CART, CLEAR_CART } from "./Action";

const init = {
  
  cart: []
};

export const cartReducer = (state = init, { type, payload }) => {
  switch (type) {
    
    case ADD_PRODUCT_TO_CART:
      return { ...state, cart:[ ...state.cart,payload.product]};
      case CLEAR_CART:
        return { ...state, cart:[] };
      default:
      return state;
  }
};
