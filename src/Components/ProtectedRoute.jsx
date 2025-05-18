import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login"  replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
