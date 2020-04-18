import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../pages/Homepage/Homepage";

export default () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <PublicRoute
      path="/signup"
      element={() => <div>Signup</div>}
      authenticated={false}
    />
    <PublicRoute
      path="/login"
      element={() => <div>Login</div>}
      authenticated={false}
    />
    <PrivateRoute
      path="/chat"
      element={() => <div>Chat</div>}
      authenticated={false}
    />
  </Routes>
);
