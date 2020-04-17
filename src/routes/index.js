import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<div>Home</div>} />
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
  </BrowserRouter>
);
