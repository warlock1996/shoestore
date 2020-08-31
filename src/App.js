import React from "react";
import { GlobalProvider } from "./GlobalContext";
import TopBar from "./layout/TopBar";
import SideBar from "./layout/SideBar";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <TopBar />
      <SideBar />
    </GlobalProvider>
  );
}

export default App;
