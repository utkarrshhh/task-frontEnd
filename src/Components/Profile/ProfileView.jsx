import React, { useContext, useRef } from "react";
import "./ProfileView.css";
import Avatar from "react-avatar";
import AboutContext from "../../Contexts/AboutContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const ProfileView = (props) => {
  const profileRef = useRef(null);
  const { name, setName, email, setEmail } = useContext(AboutContext);
  console.log(name, email);
  console.log(props);
  useGSAP(() => {
    gsap.from(profileRef.current, {
      opacity: 0,
      right: "-100%",
      duration: 0.6,
      ease: "power2.inOut",
      // scale: 0.7,
    });
  });
  return (
    <div>
      <div className="profileContainer" ref={profileRef}>
        <div
          className="profileImage"
          style={{
            borderRadius: "50%",
            height: "65px",
            width: "65px",
            border: "2px solid",
            alignContent: "center",
            margin: "5px auto",
          }}
        ></div>

        <div
          className="profileName"
          style={{ margin: "10px auto", width: "fitContent" }}
        >
          <div>{props.name.toUpperCase()}</div>
          <hr></hr>
          <span style={{ position: "absolute", right: "10px" }}>
            {props.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
