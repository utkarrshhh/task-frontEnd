import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import QuotesContext from "../../Contexts/QuotesContext";

const Post = () => {
  // const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { quotes, setQuotes } = useContext(QuotesContext);
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

  return (
    <>
      <Navbar />
      <div
        style={{
          position: "relative",
          top: "0px",
          width: "100%",
          height: "100vh",
          // background: "blue",

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
                style={{
                  height: "100px",
                  width: "100%",
                  border: "2px solid red",
                  zIndex: "1000",
                  color: "white",
                  background: "#13171C",
                  margin: "10px",
                  padding: "0 5px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "30%",
                    width: "100%",
                    borderBottom: "2px solid white",
                  }}
                >
                  <span style={{}}>{value.author}</span>
                  <span>
                    <span style={{ fontFamily: "sans-serif" }}>
                      Tags used -
                    </span>{" "}
                    {value.tags ? value.tags : "no Tags"}
                  </span>
                </div>
                <div
                  style={{
                    height: "70%",
                    width: "100%",
                    // border: "2px solid blue",
                    overflowY: "hidden",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      height: "90%",
                      display: "flex",
                      justifyContent: "normal",
                      alignItems: "baseline",
                      padding: "0 5px",
                    }}
                  >
                    {value.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
