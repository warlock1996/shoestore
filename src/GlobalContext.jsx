import React from "react";
import Reducer from "./Reducer";

const data = {
  shoes: {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: "192",
      quantity: 0,
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: "177",
      quantity: 0,
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img:
        "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      price: "199",
      quantity: 0,
    },
  },
  drawer_state: false,
  cart: {},
};

export const GlobalContext = React.createContext(data);

export const GlobalProvider = (props) => {
  let [state, dispatch] = React.useReducer(Reducer, data);
  return (
    <GlobalContext.Provider
      value={{
        state: state,
        dispatcher: dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
