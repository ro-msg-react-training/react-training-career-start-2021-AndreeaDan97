import axios from "axios";
import Product from "../models/Product";
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

  insertNewProduct(product: Product) {
    return axios.post("/products/insert", {
      name: product.name,
      description: product.description,
      price: product.price,
      weight: product.weight,
      imageURL: product.imageURL,
      nameOfCategory: product.nameOfCategory,
      descriptionOfCategory: product.descriptionOfCategory,
      nameOfSupplier: product.nameOfSupplier,
    });
  }

  updateProductById(id: number, product: Product) {
    return axios.put("/products/update/" + id, {
      name: product.name,
      description: product.description,
      price: product.price,
      weight: product.weight,
      imageURL: product.imageURL,
      nameOfCategory: product.nameOfCategory,
      descriptionOfCategory: product.descriptionOfCategory,
      nameOfSupplier: product.nameOfSupplier,
    });
  }
}

export default ProductService;
