import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, authenticated, ...rest }) =>
  authenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: "test" } }} />
  );
export default PrivateRoute;
