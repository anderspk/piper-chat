import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link className="navbar-brand" to="/">
      Piper Chat
    </Link>
    <nav>
      <Link to="/login">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  </header>
);

export default Header;
