import Product from "../../models/Product";
import * as types from "../actions/actionTypes";

const initialState = {
  shopProducts: [],
  shopProduct: Product,
};

export default function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      console.log("In GET_ALL_PRODUCTS from productReducer...");
      return {
        ...state,
        shopProducts: action.payload,
      };
    case types.GET_PRODUCT_DETAILS:
      console.log("In GET_PRODUCT_DETAILS from productReducer...");
      return {
        ...state,
        shopProduct: action.product,
      };
    case types.DELETE_PRODUCT:
      console.log("In DELETE_PRODUCT from productReducer...");
      return {
        ...state,
        shopProducts: state.shopProducts.filter(
          (index) => index !== action.idOfDeletedProduct
        ),
      };
    default:
      return state;
  }
}
