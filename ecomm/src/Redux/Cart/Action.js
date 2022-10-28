export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART"
export const CLEAR_CART = "CLEAR_CART"

export const addToCart = (payload) => {
    return { type: ADD_PRODUCT_TO_CART, payload }
}
export const clearCart = () => {
    return { type: CLEAR_CART }
}
