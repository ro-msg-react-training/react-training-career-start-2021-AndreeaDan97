import axios from "axios";
class ProductService {
  getAllProducts() {
    return axios("/products", {});
  }

  getProductById(id: number) {
    return axios.get("/products/" + id);
  }

  deleteProductById(id: number) {
    return axios.delete("/products/delete/" + id, {});
  }
}

export default ProductService;
