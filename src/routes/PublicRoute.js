import React from "react";
import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ element: Component, authenticated, ...rest }) =>
  !authenticated ? (
    <Route element={<Component {...rest} />} />
  ) : (
    <Navigate to="/chat" />
  );

export default PublicRoute;
