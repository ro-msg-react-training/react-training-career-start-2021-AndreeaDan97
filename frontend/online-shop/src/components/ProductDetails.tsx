import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import ProductService from "../services/ProductService";
import React, { useState } from "react";
import Product from "../models/Product";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  customGrid: {
    justifyContent: "center",
  },
  customText: {
    color: theme.palette.primary.main,
  },
  customCard: {
    borderStyle: "none",
    borderRadius: 3,
  },
}));

function ProductDetails(props: any) {
  const classes = useStyles();
  const params = useParams();
  // return (<h1>Hello {(params as any).productId} and {product.name}</h1>)
  const product = props.location.state.currentProduct;

  var productService = new ProductService();
  let prod: Product = new Product(1, "a", "a", "a", 1, "a", 1, "a", "a");
  const [data, setData] = useState(prod);
  React.useEffect(() => {
    productService.getProductById((params as any).productId).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  console.log(data.name);

  return (
    <Grid container className={classes.customGrid}>
      <Grid item xs={12} sm={4}>
        <Card className={classes.customCard}>
          <CardHeader title={data.name} subheader={data.price + " EUR"} />
          <CardMedia
            style={{ padding: "170px" }}
            image={data.imageURL}
            title={data.name}
          />
          <CardContent>
            <Typography className={classes.customText}>
              Technical Specifications:
            </Typography>
            <Typography>Tip faina: {data.description}</Typography>
            <Typography>Gramaj: {data.weight} grame</Typography>
            <Typography>Categorie: {data.nameOfCategory}</Typography>
            <Typography>
              Descriere categorie: {data.descriptionOfCategory}
            </Typography>
            <Typography>Furnizor: {data.nameOfSupplier}</Typography>
            <Button
              component={Link}
              to={{ pathname: `/products`, state: { data } }}
            >
              <ShoppingCartIcon></ShoppingCartIcon>
            </Button>
            <Button>
              <DeleteIcon></DeleteIcon>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
function componentDidMount() {
  throw new Error("Function not implemented.");
}
