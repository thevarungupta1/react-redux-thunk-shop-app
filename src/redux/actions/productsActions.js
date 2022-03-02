import shopStoreApi from "../../apis/shopStoreApi";
import { ActionTypes } from "../constants/action-type";

export const fetchProducts = () => async (dispatch) => {
  const response = await shopStoreApi.get('/products');
  dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data})
}

export const fetchProduct = (id) => async (dispatch) => {
  const response = await shopStoreApi.get(`/products/${id}`);
  dispatch({type: ActionTypes.SELECTION_PRODUCT, payload: response.data})
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: ActionTypes.SELECTION_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
