import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../pages/Homepage/Homepage";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Chat from "../pages/Chat/Chat";

export default () => (
  <Routes>
    <Route exact path="/" element={<Homepage />} />
    <PublicRoute path="/signup" element={<Signup />} authenticated={false} />
    <PublicRoute path="/login" element={<Login />} authenticated={false} />
    <PrivateRoute path="/chat" element={<Chat />} authenticated={false} />
  </Routes>
);
