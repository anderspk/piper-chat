import React from "react";
import { Route, Navigate } from "react-router-dom";

const PublicRoute = ({ element, authenticated, ...rest }) =>
  !authenticated ? <Route element={element} /> : <Navigate to="/chat" />;

export default PublicRoute;
