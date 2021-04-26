import React from "react";
import Product from "../models/Product";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  customCard: {
    borderStyle: "outset",
    borderWidth: 2,
    borderRadius: 15,
  },
}));

export interface ProductDetailsInterface {
  currentProduct: Product;
}

function ProductComponent(props: ProductDetailsInterface) {
  const classes = useStyles();
  const currentProduct = props.currentProduct;
  return (
    <Card className={classes.customCard}>
      <CardHeader
        title={props.currentProduct.name}
        subheader={props.currentProduct.price + " EUR"}
      />
      <CardMedia
        style={{ padding: "110px" }}
        image={props.currentProduct.imageURL}
        title={props.currentProduct.name}
      />
      <CardContent>
        <Button
          component={Link}
          to={{
            pathname: `/products/${props.currentProduct.id}`,
            state: { currentProduct },
          }}
        >
          <InfoIcon></InfoIcon>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductComponent;
