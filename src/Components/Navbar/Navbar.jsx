import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      {" "}
      <header className="header">
        <h1 className="logo">
          <Link to="#">Thoughts Pro</Link>
        </h1>
        <ul className="main-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="signup">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="login-nav">
            <Link to="/login">Login</Link>
          </li>
          <li className="">
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
