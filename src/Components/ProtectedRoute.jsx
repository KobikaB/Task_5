import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const userData = localStorage.getItem("userData");
  const isLoggedIn = !!userData;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
