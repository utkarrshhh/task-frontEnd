import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { handleLogout } from "../Login/HandleLoginLogout";
const Navbar = () => {
  const token = sessionStorage.getItem("token");
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
          {token ? (
            <li className="">
              <Link to="/login">Logout</Link>
            </li>
          ) : (
            <div>
              <li className="signup">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="login-nav" onClick={handleLogout}>
                <Link to="/login">Login</Link>
              </li>
            </div>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
