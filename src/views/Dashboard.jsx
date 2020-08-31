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
    console.log(shoe);
    dispatcher({ type: "addToCart", payload: shoe });
  }
  return (
    <Grid
      container
      spacing={3}
      alignItems="center"
      alignContent="space-between"
    >
      {Object.entries(state.shoes).map(([shoe, { name, img }]) => (
        <Grid className="shoeCard" key={shoe} item xs={12} md={4}>
          <Card variant="outlined" m={2}>
            <CardMedia className="shoeCardMedia" image={img}></CardMedia>
            <CardContent>
              <Typography className="brandFont" variant="h5">
                {name}
              </Typography>
            </CardContent>
            <CardActions className="shoeCardActions">
              <IconButton>
                <FavoriteBorderRounded />
              </IconButton>
              <Button
                onClick={() => addToCart({ [shoe]: { name: name, img: img } })}
                variant="outlined"
                startIcon={<ShoppingCartOutlined />}
              >
                <Typography className="brandFont" variant="h6">
                  Add to cart
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Dashboard;