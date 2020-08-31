import React from "react";
import { Drawer, Toolbar, IconButton } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { GlobalContext } from "../GlobalContext";

function SideBar() {
  const { state, dispatcher } = React.useContext(GlobalContext);
  return (
    <Drawer open={state.drawer_state} variant="temporary">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => dispatcher({ type: "toggleDrawer" })}
        >
          <ArrowBack />
        </IconButton>
      </Toolbar>
      Some Navigation
    </Drawer>
  );
}

export default SideBar;
