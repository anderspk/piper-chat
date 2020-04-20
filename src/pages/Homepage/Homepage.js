import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/pp-big-logo.png";
import "./Homepage.scss";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to Piper Chat</h1>
      <p className="blurb">
        A realtime chat application powered by React & Firebase
      </p>

      <div className="buttons-container">
        <button
          className="create-new-account-button"
          onClick={() => navigate("/signup")}
        >
          Create New Account
        </button>
        <button className="login-button" onClick={() => navigate("/login")}>
          Login to Your Account
        </button>
      </div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Homepage;
