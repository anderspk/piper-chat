import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/pp-big-logo.png";
import "./Homepage.scss";

const Homepage = () => (
  <div className="home-page">
    <h1>Welcome to Piper Chat</h1>
    <p className="blurb">
      A realtime chat application powered by React & Firebase
    </p>

    <div className="buttons-container">
      <Link to="/login">
        <button className="create-new-account">Create New Account</button>
      </Link>
      <Link to="/signup">
        <button className="login">Login to Your Account</button>
      </Link>
    </div>
    <img src={logo} alt="Logo" />
  </div>
);

export default Homepage;
