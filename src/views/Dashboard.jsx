import React from "react";
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
import {
  ShoppingCartOutlined,
  FavoriteBorderRounded,
} from "@material-ui/icons";
import { GlobalContext } from "../GlobalContext";
function Dashboard() {
  const { state, dispatcher } = React.useContext(GlobalContext);
  function addToCart(shoe) {
    dispatcher({ type: "addToCart", payload: shoe });
  }
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      alignContent="space-between"
    >
      {Object.entries(state.shoes).map(
        ([shoe, { name, img, price, quantity }]) => (
          <Grid className="shoeCard" key={shoe} item xs={12} md={4}>
            <Card variant="outlined" m={2}>
              <CardMedia className="shoeCardMedia" image={img}></CardMedia>
              <CardContent>
                <Typography className="brandFont" variant="h5">
                  {name}
                </Typography>
                <Typography className="brandFont" variant="h6">
                  $ {price}
                </Typography>
              </CardContent>
              <CardActions className="shoeCardActions">
                <IconButton>
                  <FavoriteBorderRounded />
                </IconButton>
                <Button
                  onClick={() =>
                    addToCart({
                      [shoe]: {
                        name: name,
                        img: img,
                        price: price,
                        quantity: parseInt(quantity) + 1,
                      },
                    })
                  }
                  variant="outlined"
                  startIcon={<ShoppingCartOutlined />}
                >
                  <Typography className="brandFont" variant="h6">
                    {quantity ? "Added to cart " : "Add to cart "}
                    {quantity ? quantity : "0"}
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
}

export default Dashboard;
