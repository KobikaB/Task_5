import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Rootlayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Rootlayout;
