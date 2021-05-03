import ProductService from "../../services/ProductService";
import * as types from "./actionTypes";

let productService = new ProductService();

export function loadProductsSuccess(products: any) {
  console.log("In loadProductsSucces from productAction...");
  return { type: types.GET_ALL_PRODUCTS, products };
}

export function getAllProducts() {
  console.log("In getAllProducts from productAction...");
  return function (dispatch: any) {
    productService.getAllProducts().then((products) =>
      dispatch({
        type: types.GET_ALL_PRODUCTS,
        payload: products.data,
      })
    );
  };
}

export function getProductById(id: number) {
  console.log("In getProductById from productAction...");
  return function (dispatch: any) {
    productService.getProductById(id).then((product) =>
      dispatch({
        type: types.GET_PRODUCT_DETAILS,
        product: product.data,
      })
    );
  };
}

export function deleteProductById(id: number) {
  console.log("In deleteProductById from productActions...");
  return function (dispatch: any) {
    productService.deleteProductById(id).then(() =>
      dispatch({
        type: types.DELETE_PRODUCT,
        idOfDeletedProduct: id,
      })
    );
  };
}
