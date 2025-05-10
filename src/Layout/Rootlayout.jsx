import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Rootlayout = () => {
  return (
    <div>
      <Navbar isLogin={true} />
      <Outlet />
    </div>
  );
};

export default Rootlayout;
