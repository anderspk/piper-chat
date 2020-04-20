import React from "react";
import Svg from "../../svg/Svg";
import SignupSigninForm from "../components/SignupSigninForm/SignupSigninForm";
import "./Signup.scss";

const Signup = () => (
  <div className="signup">
    <section className="top">
      <SignupSigninForm />
      <Svg type="wave" className="wave light" />
      <Svg type="whale" className="whale" />
      <Svg type="wave" className="wave" />
    </section>
    <section className="bottom"></section>
  </div>
);

export default Signup;
