import React, { useContext } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import AboutContext from "../../Contexts/AboutContext";

const Login = () => {
  let keyPasswordToken = "";
  let keyEmailToken = "";
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserContext);
  const { name, setName, email, setEmail } = useContext(AboutContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = document.getElementById("errorLine");
    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");
    if (!email.value || !password.value) {
      error.innerHTML = "";
      error.innerHTML = "*Fields can't be left vacant*";
    }
    //post request to backend and then check whether the details are true or not then login or view error message as wish
    else {
      // console.log("idhar hai ab");

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
              keyPasswordToken = value2.keyPasswordToken;
              keyEmailToken = value2.keyEmailToken;
              sessionStorage.setItem("name", `${value2.keyName}`);
              sessionStorage.setItem("email", `${value2.keyEmailToken}`);
              console.log("session storage done");
              setEmail(value2.keyEmailToken);
              setName(value2.keyName);
              navigate("/posts");
            }
          });
      } catch (e) {
        console.log(e.message);
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div className="random-thought">
        <div>
          <div style={{ color: "skyblue", fontSize: "34px" }}>
            <h1 className="logo2">
              <Link to="#">Thoughts Pro</Link>
            </h1>
          </div>
          here description - Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur below is the user
        </div>
      </div>
      <div className="form-elements">
        <form className="login">
          <input type="text" placeholder="Username" id="loginEmail" />
          <input type="password" placeholder="Password" id="loginPassword" />
          <div id="errorLine">{console.log("loaded")}</div>
          <button onClick={handleSubmit}>Login</button>
          <div className="signup-redirect">
            <p>
              don't have an account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
