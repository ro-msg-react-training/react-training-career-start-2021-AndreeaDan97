import React from "react";
import Product from "../models/Product";
import ProductDetails from "./ProductComponent";
import products from "./products";
import { Grid } from "@material-ui/core";
import ProductService from "../services/ProductService";

function ProductList() {
  var productService = new ProductService();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    productService.getAllProducts().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((product: Product) => (
        <Grid item xs={12} sm={3} key={product.id}>
          <ProductDetails currentProduct={product} key={product.id} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
