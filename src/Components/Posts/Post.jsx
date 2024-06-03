import React from "react";
import Navbar from "../Navbar/Navbar";

const Post = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "46px",
          width: "100%",
          height: "100vh",
          background: "blue",
          overflowY: "visible",
        }}
      >
        posts
      </div>
    </>
  );
};

export default Post;
