export default (state, action) => {
  switch (action.type) {
    case "toggleDrawer":
      return { ...state, drawer_state: !state.drawer_state };
    case "addToCart":
      let newCart;
      newCart = { ...state.cart, ...action.payload };
      return {
        ...state,
        cart: newCart,
        shoes: { ...state.shoes, ...action.payload },
      };
    case "removeItemFromCart":
      let newCartAfterDeleting = Object.entries(state.cart).filter(
        ([shoe]) => shoe !== action.payload
      );
      let newShoesAfterDeleting = Object.entries(state.shoes).map(
        ([shoe, obj]) => {
          if (shoe === action.payload) {
            return [shoe, { ...obj, quantity: 0 }];
          }
          return [shoe, obj];
        }
      );
      return {
        ...state,
        shoes: Object.fromEntries(newShoesAfterDeleting),
        cart: Object.fromEntries(newCartAfterDeleting),
      };
    default:
      return state;
  }
};
