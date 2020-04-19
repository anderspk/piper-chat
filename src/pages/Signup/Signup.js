import React from "react";
import Svg from "../../svg/Svg";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signup">
      <section className="top">
        <div className="container">
          <div className="padded-container">
            <h2>Sign Up to Piper Chat</h2>
            <p className="blurb">
              Fill in the form below to create an account.
            </p>
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
              <label htmlFor="password">Password</label>
              <input type="password" />
            </form>
          </div>
        </div>
        <Svg type="wave" className="wave light" />
        <Svg type="whale" className="whale" />
        <Svg type="wave" className="wave" />
      </section>
      <section className="bottom"></section>
    </div>
  );
};

export default Signup;
