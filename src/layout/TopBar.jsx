import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { MenuRounded, ShoppingCartRounded } from "@material-ui/icons";
import { GlobalContext } from "../GlobalContext";

function TopBar() {
  const { dispatcher } = React.useContext(GlobalContext);
  return (
    <AppBar
      className="appbar"
      elevation={0}
      position="fixed"
      color="transparent"
    >
      <Toolbar className="topbar_toolbar">
        <IconButton
          color="inherit"
          onClick={() => dispatcher({ type: "toggleDrawer" })}
        >
          <MenuRounded />
        </IconButton>
        <Typography className="brandName" variant="h5">
          The Shoe Store
        </Typography>
        <IconButton>
          <ShoppingCartRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
