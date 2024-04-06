import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let error = document.getElementById("errorLine");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    if (!email.value || !password.value) {
      error.textContent = "*Fields can't be left vacant*";
    }
    //post request to backend and then check whether the details are true or not then login or view error message as wish
    else {
      try {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        })
          .then((value) => value.json())
          .then((value2) => {
            console.log(value2);
            if (
              value2.message.includes("not") ||
              value2.message.includes("Wrong") ||
              value2.message.includes("found")
            ) {
              error.innerHTML = `*${value2.message}*`;
            } else {
              sessionStorage.setItem("token", `Bearer ${value2.token}`);
              console.log("session storage done");
              navigate("/");
            }
          });
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <>
      <div className="form-elements">
        <form className="login">
          <input type="text" placeholder="Username" id="loginEmail" />
          <input type="password" placeholder="Password" id="loginPassword" />
          <div id="errorLine"></div>
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
