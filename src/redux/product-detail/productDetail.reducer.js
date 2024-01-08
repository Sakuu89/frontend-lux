import {
  GET_PRODUCTDETAIL_LOADING,
  GET_PRODUCTDETAIL_SUCCESS,
  GET_PRODUCTDETAIL_ERROR,
} from "./produtDetail.types";

const initialState = {
  isLoading: false,
  isError: false,
  productDetailData: {},
};

export const productDetailReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_PRODUCTDETAIL_LOADING: {
      console.log("Loading....")
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }

    case GET_PRODUCTDETAIL_SUCCESS: {
      console.log("Paload recieved:", payload)
      return {
        ...state,
        isLoading: false,
        isError: false,
        productDetailData: payload,
      };
    }

    case GET_PRODUCTDETAIL_ERROR: {
      console.log("Error")
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};