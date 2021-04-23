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
  // const params = useParams()
  // return (<h1>Hello {(params as any).productId} and {product.name}</h1>)
  const classes = useStyles();
  const product = props.location.state.currentProduct;
  return (
    <Grid container className={classes.customGrid}>
      <Grid item xs={12} sm={4}>
        <Card className={classes.customCard}>
          <CardHeader title={product.name} subheader={product.price + " EUR"} />
          <CardMedia
            style={{ padding: "170px" }}
            image={product.image}
            title={product.name}
          />
          <CardContent>
            <Typography className={classes.customText}>
              Technical Specifications:
            </Typography>
            <Typography>{product.description}</Typography>
            <Button
              component={Link}
              to={{ pathname: `/products`, state: { product } }}
            >
              <ShoppingCartIcon></ShoppingCartIcon>
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ProductDetails;
