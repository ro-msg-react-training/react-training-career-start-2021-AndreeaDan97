import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShopIcon from "@material-ui/icons/Shop";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  customButton: {
    position: "relative",
    left: 50,
    fontWeight: "bold",
    color: "white",
  },
  customLoginButton: {
    position: "relative",
    left: 940,
    color: "white",
  },
}));

const Header = () => {
  const styleClass = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <ShopIcon></ShopIcon>
        <Typography>Online shop</Typography>
        <Button
          className={styleClass.customButton}
          component={Link}
          to="/products"
        >
          Home
        </Button>
        <Button className={styleClass.customLoginButton}>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
