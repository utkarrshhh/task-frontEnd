import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Quote.css";
const Quote = () => {
  return (
    <>
      <Navbar />
      <div className="bodyQuote">
        <div
          className="topic"
          id="topic"
          style={{ background: "red", width: "100%", height: "25%" }}
        ></div>
        <div
          className="topic"
          id="topic"
          style={{ background: "green", width: "100%", height: "75%" }}
        ></div>
      </div>
    </>
  );
};

export default Quote;
