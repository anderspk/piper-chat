import React, { useState } from "react";
import Svg from "../../svg/Svg";
import "./Signup.scss";
import * as auth from "../../helpers/auth";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const SignupSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signup(email, password);
    } catch (error) {
      setError(error.message);
      console.error({ error });
    }
  };

  const googleSignIn = async () => {
    try {
      await auth.signInWithGoogle();
    } catch (error) {
      setError(error.message);
      console.error({ error });
    }
  };

  const githubSignIn = async () => {
    try {
      await auth.signInWithGithub();
    } catch (error) {
      setError(error.message);
      console.error({ error });
    }
  };

  return (
    <div className="signup-signin">
      <section className="top">
        <div className="container">
          <div className="padded-container">
            <h2>Sign Up to Piper Chat</h2>
            <p className="blurb">
              Fill in the form below to create an account.
            </p>
            <form>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="sign-up" onClick={handleSubmit}>
                Sign up
              </button>
              <div className="other-services-container">
                <span>You can also sign up with any of these services</span>
                <div className="buttons-container">
                  <button
                    type="button"
                    className="google-signup"
                    onClick={googleSignIn}
                  >
                    Sign up with Google
                  </button>
                  <button
                    type="button"
                    className="github-signup"
                    onClick={githubSignIn}
                  >
                    Sign up with Github
                  </button>
                </div>
              </div>
              <ErrorMessage>{error}</ErrorMessage>
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

export default SignupSignin;
