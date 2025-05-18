import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Rootlayout = ({isLoggedIn}) => {
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <Outlet />
    </div>
  );
};

export default Rootlayout;
