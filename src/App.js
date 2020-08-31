import React from "react";
import { GlobalProvider } from "./GlobalContext";
import TopBar from "./layout/TopBar";
import SideBar from "./layout/SideBar";
import Content from "./layout/Content";

function App() {
  return (
    <GlobalProvider>
      <TopBar />
      <SideBar />
      <Content />
    </GlobalProvider>
  );
}

export default App;
