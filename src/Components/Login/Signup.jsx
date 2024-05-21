import React from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
const Signup = () => {
  const url = "http://localhost:3000/api/signup";
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    const nameSource = document.getElementById("name");
    const emailSource = document.getElementById("email");
    const passwordSource = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm");
    const checkbox = document.getElementById("checkbox");
    const errorMessage = document.getElementById("errorMessage");
    e.preventDefault();
    try {
      console.log("2");
      // console.log(nameSource.value, emailSource.value, passwordSource.value);

      if (
        !emailSource.value ||
        !passwordSource.value ||
        !nameSource.value ||
        !confirmPassword.value ||
        !checkbox.value
      ) {
        errorMessage.innerHTML = "*Some required fields are empty*";
        return;
      } else {
        console.log(nameSource.value, emailSource.value, passwordSource.value);
        if (passwordSource.value !== confirmPassword.value) {
          errorMessage.innerHTML =
            "*Password and Confirm Password does not match*";
          return;
        }
        // let midPassword = bcrypt.hashSync(passwordSource.value);
        // console.log(midPassword);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: emailSource.value,
            name: nameSource.value,
            password: passwordSource.value,
          }),
        })
          .then((value) => value.json())
          .then((value) => {
            if (value.message.toLowerCase().includes("success")) {
              console.log("success in sending data \t ", response);
              navigate("/login");
            } else {
              console.log(value.message);
              errorMessage.innerHTML = "*" + value.message + "*";
            }
          });
        // console.log(response);
        // if (response.message.contains("success")) {
        //   console.log("5");
        //   console.log("success in sending data \t ", response);
        //   navigate("/login");
        // } else {
        //   console.log(response.message);
        // }
      }
    } catch (e) {
      console.log("6");
      console.log("asjkdfhhh", e);
    }
  };

  return (
    <div className="wrappers-wrapper">
      <div className="wrapper">
        <h2>Registration</h2>
        <div
          id="errorMessage"
          style={{
            margin: "5px 0px",
            // border: "2px solid",
            width: "fitContent",
            minHeight: "30px",
            color: "red",
          }}
        ></div>
        <form action="#">
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter your email"
              id="email"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create password"
              id="password"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm password"
              id="confirm"
              required
            />
          </div>
          <div className="policy">
            <input type="checkbox" id="checkbox" />
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
