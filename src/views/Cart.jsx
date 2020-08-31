import React from "react";
import { GlobalContext } from "../GlobalContext";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";

function Cart() {
  const { state, dispatcher } = React.useContext(GlobalContext);
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      alignContent="space-between"
    >
      {Object.entries(state.cart).map(([shoe, { name, img }]) => (
        <Grid className="cartCard" key={shoe} item xs={12} md={4}></Grid>
      ))}
    </Grid>
  );
}

export default Cart;
