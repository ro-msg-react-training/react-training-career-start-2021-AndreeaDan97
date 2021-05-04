import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import ShopIcon from "@material-ui/icons/Shop";
import { NavLink } from "react-router-dom";
import { headerStyle } from "../styles/Header.styles";

const Header = () => {
  const styleClass = headerStyle();
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
