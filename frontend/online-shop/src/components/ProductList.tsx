import React from "react";
import Product from "../models/Product";
import ProductDetails from "./ProductComponent";
import products from "./products";
import { Grid } from "@material-ui/core";

function ProductList() {
  return (
    <Grid container spacing={2}>
      {products.map((product: Product) => (
        <Grid item xs={12} sm={3} key={product.id}>
          <ProductDetails currentProduct={product} key={product.id} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
