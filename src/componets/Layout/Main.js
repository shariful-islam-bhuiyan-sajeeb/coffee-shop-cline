import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Shere/Header";
import Drawer from "../Shere/Drawer";

const Main = () => {
  return (
    <div>
      <Drawer />
      {/* <Header />
      <Outlet /> */}
    </div>
  );
};

export default Main;
