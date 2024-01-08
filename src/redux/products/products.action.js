import instance from "../../utils/axiosInstance";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./products.types";

export const getProducts = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS_LOADING });
  try {
    const responce = await instance.get(`/products`, { });
    const data = responce.data;
    const totalProductCount = responce.headers["x-total-count"];
    console.log("Fetched Data:", data);
    console.log("Total Product Count:", totalProductCount);
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: { data, totalProductCount },
    });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};
