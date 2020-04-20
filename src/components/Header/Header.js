import React from "react";
import { Link } from "react-router-dom";
import Svg from "../../svg/Svg";
import "./Header.scss";
import { auth } from "../../services/firebase";

const Header = ({ authenticated }) => (
  <header>
    <Link className="navbar-brand" to="/">
      <Svg type="pplogo" className="logo" />
      Piper Chat
    </Link>
    <nav>
      {!authenticated ? (
        <>
          <Link to="/login">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </>
      ) : (
        <button onClick={() => auth().signOut()}>Sign Out</button>
      )}
    </nav>
  </header>
);

export default Header;
