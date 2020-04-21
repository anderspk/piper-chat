import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/pp-big-logo.png";
import "./Homepage.scss";
import { auth } from "../../services/firebase";

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to Piper Chat</h1>
      <p className="blurb">
        A realtime chat application powered by React & Firebase
      </p>

      <div className="buttons-container">
        {auth().currentUser ? (
          <>
            <h2>{`Hello, ${auth().currentUser.email}`}</h2>
            <button
              className="go-to-chat-button"
              onClick={() => navigate("/chat")}
            >
              Go to Chat
            </button>
          </>
        ) : (
          <>
            <button
              className="create-new-account-button"
              onClick={() => navigate("/signup")}
            >
              Create New Account
            </button>
            <button className="login-button" onClick={() => navigate("/login")}>
              Login to Your Account
            </button>
          </>
        )}
      </div>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Homepage;
