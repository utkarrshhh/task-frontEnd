import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import QuotesContext from "../../Contexts/QuotesContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "./Post.css";

const Post = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { quotes, setQuotes } = useContext(QuotesContext);
  const token = sessionStorage.getItem("token");
  // const [likeQuotes, setLikeQuotes] = useState({whoLiked: "", whoseLiked: "",whatLiked: "",count:0});
  useGSAP(() => {
    gsap.from(
      ".quoteContainers",
      {
        y: 30,
        opacity: 0,
        duration: 0.3,
        delay: 1,
        scale: 0,
      }
      // [value]
    );
  });
  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("http://localhost:3000/api/login");
      console.log(response);

      const data = await response.json();
      // console.log(data);
      setQuotes(data);
      setLoading(false);
    };
    fetchQuotes();
  }, []);

  // console.log(quotes);

  const likeBtnClicked = (e) => {
    e.preventDefault();
    console.log(e.target.src);

    if (e.target.src.includes("glowHeart.png")) {
      e.target.src = "./public/heart.png";
    } else {
      e.target.src = "./public/glowHeart.png";
    }
    gsap.from(e.target, { opacity: 0.5, scale: 0.5, duration: 0.5 });
  };

  return token ? (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "0px",
          width: "100%",
          height: "100vh",
          background: "black",

          padding: "20px",
        }}
      >
        {loading ? (
          <div
            style={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alginItems: "center",
              height: "100px",
              width: "100px",
            }}
          >
            <img src="./public/loading.gif" />
          </div>
        ) : (
          <div>
            {quotes.map((value, index) => (
              <div
                className="quoteContainers"
                style={{
                  height: "200px",
                  width: "100%",
                  // border: "2px solid red",
                  zIndex: "8",
                  color: "white",
                  background: "rgba(36, 48, 63, 0.88)",
                  margin: "10px",
                  padding: "0 5px",
                  borderRadius: "10px",
                  // border: "2px solid orange",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "20%",
                    width: "100%",
                    borderBottom: "2px solid white",
                  }}
                >
                  <span style={{ color: "orange" }}>{value.author}</span>
                  <span>
                    <span style={{ fontFamily: "sans-serif", color: "orange" }}>
                      Tags used -
                    </span>{" "}
                    {value.tags ? value.tags : "no Tags"}
                  </span>
                </div>
                <div
                  style={{
                    height: "60%",
                    width: "100%",
                    // border: "2px solid blue",
                    overflowY: "hidden",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      height: "89%",
                      display: "flex",
                      overflow: "hidden",
                      justifyContent: "normal",
                      alignItems: "baseline",
                      padding: "0 5px",
                    }}
                  >
                    {value.content}
                  </div>
                </div>
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: "20%",
                    zIndex: "1",
                    objectFit: "contain",
                    padding: "0 10px",
                  }}
                >
                  <button
                    type="button"
                    onClick={likeBtnClicked}
                    style={{
                      height: "100%",
                      width: "auto",
                      background: "none",
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      style={{
                        height: "60%",
                        filter: "invert(1)",
                        zIndex: "1",
                      }}
                      src="./public/heart.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  ) : (
    navigate("/login")
  );
};

export default Post;
