export default (state, action) => {
  switch (action.type) {
    case "addToCart":
      return state;
    case "toggleDrawer":
      return { ...state, drawer_state: !state.drawer_state };
    case "addToCart":
      console.log("here in reducer", state.cart);
      let newCart = { ...state.cart, ...action.payload };
      return { ...state, cart: newCart };
    default:
      return state;
  }
};
