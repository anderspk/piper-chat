import React, { useState } from "react";
import * as auth from "../../../helpers/auth";
import { Link } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./SignupSigninForm.scss";

const SignupSigninForm = ({ signin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      signin
        ? await auth.signin(email, password)
        : await auth.signup(email, password);
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

  const HEADER = signin ? "Sign In to Piper Chat" : "Sign Up to Piper Chat";
  const BLURB = signin
    ? "Fill in the form below to login to your account."
    : "Fill in the form below to create an account.";
  const OTHER_SERVICES = signin
    ? "You can also sign in with any of these services"
    : "You can also sign up with any of these services";
  const SUBMIT = signin ? "Sign in" : "Sign up";
  const GOOGLE = signin ? "Sign in with Google" : "Sign up with Google";
  const GITHUB = signin ? "Sign in with Github" : "Sign up with Github";
  const ALTERNATIVE = signin ? (
    <>
      Don't have an account? <Link to="/signup">Sign up</Link>
    </>
  ) : (
    <>
      Already have an account? <Link to="/login">Sign in</Link>
    </>
  );

  return (
    <div className="signup-signin-form">
      <div className="padded-container">
        <h2>{HEADER}</h2>
        <p className="blurb">{BLURB}</p>
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
          <button className="submit-button" onClick={handleSubmit}>
            {SUBMIT}
          </button>
          <div className="other-services-container">
            <span>{OTHER_SERVICES}</span>
            <div className="buttons-container">
              <button
                type="button"
                className="google-button"
                onClick={googleSignIn}
              >
                {GOOGLE}
              </button>
              <button
                type="button"
                className="github-button"
                onClick={githubSignIn}
              >
                {GITHUB}
              </button>
            </div>
          </div>
          <span className="alternative">{ALTERNATIVE}</span>
          <ErrorMessage>{error}</ErrorMessage>
        </form>
      </div>
    </div>
  );
};

export default SignupSigninForm;
