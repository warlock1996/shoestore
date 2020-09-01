import React from "react";
import { GlobalContext } from "../GlobalContext";
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { DeleteOutlineRounded } from "@material-ui/icons";

function Cart() {
  const { state, dispatcher } = React.useContext(GlobalContext);
  return (
    <Grid
      className="cartContainer"
      container
      spacing={3}
      alignItems="flex-start"
      justify="center"
    >
      <Grid item xs={12} md={Object.entries(state.cart).length ? 6 : 0}>
        <Grid container direction="column" alignContent="stretch">
          {Object.entries(state.cart).map(
            ([shoe, { name, img, price, quantity }]) => (
              <Grid key={shoe} item xs={12} md={12}>
                <Card className="cartCard" variant="outlined" m={2}>
                  <CardHeader
                    action={
                      <IconButton
                        onClick={() =>
                          dispatcher({
                            type: "removeItemFromCart",
                            payload: shoe,
                          })
                        }
                      >
                        <DeleteOutlineRounded />
                      </IconButton>
                    }
                  ></CardHeader>
                  <CardContent className="cartCardContent">
                    <Typography className="brandFont" variant="h5">
                      {name}
                    </Typography>
                    <Typography className="brandFont" variant="h6">
                      Quantity x {quantity ? quantity : "0"}
                    </Typography>
                    <Typography className="brandFont" variant="h6">
                      Price $ {price}
                    </Typography>
                  </CardContent>
                  <CardMedia className="cartCardMedia" image={img}></CardMedia>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </Grid>

      <Grid item xs={12} md={5}>
        <Card variant="outlined" m={2}>
          <CardContent>
            <Typography className="brandName" variant="h5">
              Order Summmary
            </Typography>
            <Typography className="brandName" variant="h6">
              Total $
              {Object.entries(state.cart).reduce(
                (acc, [shoe, { price, quantity }]) =>
                  acc + parseInt(price) * parseInt(quantity),
                0
              )}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className="checkoutButton" varaint="outlined" fullWidth>
              <Typography variant="h5" className="brandName">
                Checkout
              </Typography>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Cart;
