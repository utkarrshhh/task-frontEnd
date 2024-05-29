import React, { useContext } from "react";
import "./ProfileView.css";
import Avatar from "react-avatar";
import AboutContext from "../../Contexts/AboutContext";

const ProfileView = (props) => {
  const { name, setName, email, setEmail } = useContext(AboutContext);
  console.log(name, email);
  console.log(props);
  return (
    <div>
      <div className="profileContainer">
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
