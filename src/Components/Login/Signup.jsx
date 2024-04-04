import React from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const nameSource = document.getElementById("name");
  const emailSource = document.getElementById("email");
  const passwordSource = document.getElementById("password");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // let midPassword = bcrypt.hash(passwordSource.value);
    console.log({ nameSource, emailSource, passwordSource });
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: {
        email: emailSource.value,
        name: nameSource.value,
        password: midPassword,
      },
    });
    navigate("/login");
  };

  return (
    <div className="wrappers-wrapper">
      <div className="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password" required />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & condition</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Register Now" onClick={handleSubmit} />
          </div>
          <div className="text">
            <h3>
              Already have an account? <Link to="/login">Login now</Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
