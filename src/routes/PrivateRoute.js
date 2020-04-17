import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, authenticated, ...rest }) =>
  authenticated ? (
    <Route element={<Component {...rest} />} />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: "test" } }} />
  );
export default PrivateRoute;
