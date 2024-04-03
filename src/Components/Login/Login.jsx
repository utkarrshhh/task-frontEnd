import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //post request to backend and then check whether the details are true or not then login or view error message as wish
    navigate("/home");
  };

  return (
    <>
      <div className="form-elements">
        <form className="login">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button onClick={handleSubmit}>Login</button>
          <div className="signup-redirect">
            <p>
              don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
