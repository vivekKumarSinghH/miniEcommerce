import axios from "axios"

export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_LOADING = "GET_PRODUCTS_LOADING"
export const SET_PAGE = "SET_PAGE"

export const getProductsSuccess = (payload) => {
    return { type: GET_PRODUCTS_SUCCESS, payload }
}
export const setPage = (payload) => {
    return { type: SET_PAGE, payload }
}
export const getProductsLoading = () => {
    return { type: GET_PRODUCTS_LOADING }
}
export const fetchProducts = ({currentPage,sort}) => (dispatch) => {
    dispatch(getProductsLoading())
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=12&page=${currentPage}&orderBy=${sort}`).then((res) =>
        dispatch(getProductsSuccess(res.data))
    )
}