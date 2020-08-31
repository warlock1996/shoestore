import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";
import { DashboardRounded, ShoppingCartRounded } from "@material-ui/icons";
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";

function SideBar() {
  const { state } = React.useContext(GlobalContext);
  return (
    <Drawer
      className="sidebar"
      open={state.drawer_state}
      elevation={1}
      hideBackdrop
    >
      <Toolbar></Toolbar>
      <List className="menuList">
        <Link to="/">
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
        </Link>
        <Link to="/cart">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartRounded />
            </ListItemIcon>
            <ListItemText className="MenuText" primary="My Cart"></ListItemText>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default SideBar;
