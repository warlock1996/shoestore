import React from "react";
import {
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  ArrowBack,
  DashboardRounded,
  ShoppingCartRounded,
} from "@material-ui/icons";
import { GlobalContext } from "../GlobalContext";

function SideBar() {
  const { state, dispatcher } = React.useContext(GlobalContext);
  return (
    <Drawer
      className="sidebar"
      open={state.drawer_state}
      elevation={1}
      variant="temporary"
      hideBackdrop
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => dispatcher({ type: "toggleDrawer" })}
        >
          <ArrowBack />
        </IconButton>
      </Toolbar>
      <List className="menuList">
        <ListItem button>
          <ListItemIcon>
            <DashboardRounded />
          </ListItemIcon>
          <ListItemText
            className="MenuText"
            variant="h1"
            primary="Dashboard"
          ></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartRounded />
          </ListItemIcon>
          <ListItemText className="MenuText" primary="My Cart"></ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideBar;
