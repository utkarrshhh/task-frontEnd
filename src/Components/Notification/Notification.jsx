import React from "react";
import Navbar from "../Navbar/Navbar";

const Notification = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "46px",
          width: "100%",
          height: "100%",
          color: "white",
          // background: "blue",
          overflowY: "visible",
        }}
      >
        Notification
      </div>
    </>
  );
};

export default Notification;
