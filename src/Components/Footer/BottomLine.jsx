import React from "react";
import "./BottomLine.css";
import { Link } from "react-router-dom";
// import houseowner from "..../public/house-owner.png";
const BottomLine = () => {
  return (
    <div className="bottomline">
      <div id="imgBottomLine">
        <Link to="/posts">
          <img src="./house-owner.png" alt="" />
        </Link>
      </div>
      <div id="imgBottomLine">
        <Link to="/create" style={{ width: "100%", height: "100%" }}>
          <img src="./plus-button.png" />
        </Link>
      </div>
      <div id="imgBottomLine">
        <Link to="/notification">
          <img src="./notification.png" />
        </Link>
      </div>
    </div>
  );
};

export default BottomLine;
