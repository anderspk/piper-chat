import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Svg from "../../svg/Svg";

const Header = () => (
  <header>
    <Link className="navbar-brand" to="/">
      <Svg type="pplogo" className="logo" />
      Piper Chat
    </Link>
    <nav>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </header>
);

export default Header;
