import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShopIcon from "@material-ui/icons/Shop";
import { Link, NavLink } from "react-router-dom";

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
    fontWeight: "bold",
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
        <NavLink to="/products" exact style={{ textDecoration: "none" }}>
          <Button className={styleClass.customButton}>Home</Button>
        </NavLink>
        <NavLink to="" style={{ textDecoration: "none" }}>
          <Button className={styleClass.customLoginButton}>Login</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
