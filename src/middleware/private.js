import React from "react";
import { UseAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const { user } = UseAuthContext();

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return children;
};
