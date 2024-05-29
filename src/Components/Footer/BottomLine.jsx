import React from "react";
import "./BottomLine.css";
// import houseowner from "..../public/house-owner.png";
const BottomLine = () => {
  return (
    <div className="bottomline">
      <div id="imgBottomLine">
        <a href="/posts">
          <img src="./public/house-owner.png" alt="" />
        </a>
      </div>
      <div id="imgBottomLine">
        <a href="/create">
          <img src="./public/plus-button.png" />
        </a>
      </div>
      <div id="imgBottomLine">
        <a href="/notifications">
          <img src="./public/notification.png" />
        </a>
      </div>
    </div>
  );
};

export default BottomLine;
