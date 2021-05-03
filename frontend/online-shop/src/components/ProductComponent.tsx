import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { ProductDetailsInterface } from "../interfaces/ProductDetailsInterface";
import { productComponentStyle } from "../styles/ProductComponent.styles";

function ProductComponent(props: ProductDetailsInterface) {
  const classes = productComponentStyle();
  const currentProduct = props.currentProduct;
  return (
    <Card className={classes.customCard}>
      <CardHeader
        title={props.currentProduct.name}
        subheader={props.currentProduct.price + " LEI"}
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
        <Button
          onClick={() => props.deleteProductFunc(props.currentProduct.id)}
        >
          <DeleteIcon></DeleteIcon>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductComponent;
