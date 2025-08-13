// src/components/ProtectedRoute.jsx
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "./auth";

const ProtectedRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
