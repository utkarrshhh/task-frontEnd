import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import { handleLogout } from "../Login/HandleLoginLogout";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import ProfileView from "../Profile/ProfileView";
import ProfileContext from "../../Contexts/ProfileContext";

const Navbar = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(UserContext);
  const { isOpen, setIsOpen } = useContext(ProfileContext);
  const profileRef = useRef();
  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  const [image, setImage] = useState();

  const handleBodyClick = (event) => {
    console.log("isOpen clicked and now " + isOpen);
    if (event.target.tagName != "SPAN" && isOpen) {
      console.log("inside handlebOFYDAJ");
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleBodyClick);
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [isOpen]);

  const handleProfilePage = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {" "}
      <header className="header">
        <h1 className="logo">
          <Link to="#">Thoughts Pro</Link>
        </h1>
        <ul
          className="main-nav"
          style={{ textAlign: "center", height: "inherit" }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {token ? (
            <div>
              <div style={{ display: "flex" }}>
                <li className="" onClick={handleLogout}>
                  <Link to="/login">Logout</Link>
                </li>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span
                    className="name-text"
                    style={{ position: "absolute", right: "68px" }}
                  >
                    Welcome
                  </span>
                  <Avatar
                    name={sessionStorage.getItem("name")}
                    style={{
                      borderRadius: "50%",
                      overflow: "hidden",
                      padding: "0px",
                      margin: "0px",
                      height: "40px",
                      width: "40px",
                      position: "absolute",
                      right: "20px",
                    }}
                    ref={profileRef}
                    onClick={handleProfilePage}
                  />
                </div>
              </div>
              {isOpen ? (
                <ProfileView
                  name={sessionStorage.getItem("name")}
                  email={sessionStorage.getItem("email")}
                />
              ) : (
                ""
              )}
            </div>
          ) : (
            <div style={{ display: "flex" }}>
              <li className="signup">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="login-nav">
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
