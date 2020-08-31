import React from "react";
import {} from "@matera";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { GlobalContext } from "../GlobalContext";

function TopBar() {
  const { dispatcher } = React.useContext(GlobalContext);
  return (
    <AppBar className="appbar" position="fixed" color="transparent">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => dispatcher({ type: "toggleDrawer" })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h5">NIKE</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
