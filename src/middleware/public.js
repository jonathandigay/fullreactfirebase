import React from "react";
import { UseAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Public = ({ children }) => {
  const { user } = UseAuthContext();
  if (user) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return children;
};
