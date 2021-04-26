import axios from "axios";
import React from "react";

class ProductService {
  getAllProducts() {
    return axios("http://localhost:8080/products", {});
  }

  getProductById(id: number) {
    return axios.get("http://localhost:8080/products/" + id);
  }

  deleteProductById(id: number) {
    return axios.delete("http://localhost:8080/products/" + id);
  }
}

export default ProductService;
