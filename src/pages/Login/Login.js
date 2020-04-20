import React from "react";
import SignupSigninForm from "../components/SignupSigninForm/SignupSigninForm";
import "./Login.scss";

const Login = () => (
  <div className="login">
    <SignupSigninForm signin />
  </div>
);

export default Login;
