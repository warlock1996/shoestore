export default (state, action) => {
  switch (action.type) {
    case "addToCart":
      return state;
    case "toggleDrawer":
      return { ...state, drawer_state: !state.drawer_state };
    default:
      return state;
  }
};
