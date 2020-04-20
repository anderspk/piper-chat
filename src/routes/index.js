import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../pages/Homepage/Homepage";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Chat from "../pages/Chat/Chat";

export default ({ authenticated }) => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <PublicRoute
      path="/signup"
      element={<Signup />}
      authenticated={authenticated}
    />
    <PublicRoute
      path="/login"
      element={<Login />}
      authenticated={authenticated}
    />
    <PrivateRoute
      path="/chat"
      element={<Chat />}
      authenticated={authenticated}
    />
  </Routes>
);
