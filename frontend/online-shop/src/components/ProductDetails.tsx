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
import { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {
  deleteProductById,
  getProductById,
} from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsStyle } from "../styles/ProductDetails.styles";

function ProductDetails(props: any) {
  const classes = productDetailsStyle();
  const params = useParams();
  const dispatch = useDispatch();
  let data = useSelector((state: any) => state.productReducer.shopProduct);

  useEffect(() => {
    console.log("Getting the products' details...");
    const getProductDetails = getProductById((params as any).productId);
    getProductDetails(dispatch);
  }, []);

  const deleteProduct = (id: any) => {
    console.log("The product was deleted...");
    const deleteProductByItsId = deleteProductById(id);
    deleteProductByItsId(dispatch);
  };

  return (
    <Grid container className={classes.customGrid}>
      {data.id > 0 ? (
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
              <Typography>
                <strong>Tip faina:</strong> {data.description}
              </Typography>
              <Typography>
                <strong>Gramaj:</strong> {data.weight} grame
              </Typography>
              <Typography>
                <strong>Categorie:</strong> {data.nameOfCategory}
              </Typography>
              <Typography>
                <strong>Descriere categorie:</strong>{" "}
                {data.descriptionOfCategory}
              </Typography>
              <Typography>
                <strong>Furnizor:</strong> {data.nameOfSupplier}
              </Typography>
              <Button component={Link} to={{ pathname: `/products` }}>
                <ShoppingCartIcon></ShoppingCartIcon>
              </Button>
              <Button onClick={() => deleteProduct((params as any).productId)}>
                <DeleteIcon></DeleteIcon>
              </Button>
              <Button
                component={Link}
                to={{
                  pathname: `/products/${data.id}/update`,
                  state: { data },
                }}
              >
                <EditIcon></EditIcon>
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <h1>Oops! No such product in the shop!</h1>
      )}
    </Grid>
  );
}

export default ProductDetails;
