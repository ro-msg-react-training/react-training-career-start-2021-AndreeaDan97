import Product from "../models/Product";
import { Button, Grid } from "@material-ui/core";
import ProductComponent from "./ProductComponent";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductById,
  getAllProducts,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductList() {
  const [currentData, setCurrentData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.productReducer.shopProducts);

  useEffect(() => {
    const getProducts = getAllProducts();
    getProducts(dispatch);
    setCurrentData(data);
  }, [currentData]);

  const deleteProduct = (id: any) => {
    console.log("In the deleteProduct function from ProductList...");
    const deleteProductByItsId = deleteProductById(id);
    deleteProductByItsId(dispatch);
    setCurrentData(data);
  };

  return (
    <>
      <Button
        component={Link}
        to={{
          pathname: `/products/add`,
        }}
      >
        <AddIcon></AddIcon>
      </Button>
      <Grid container spacing={2}>
        {data.map((product: Product) => (
          <Grid item xs={12} sm={3} key={product.id}>
            <ProductComponent
              currentProduct={product}
              deleteProductFunc={deleteProduct}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ProductList;
