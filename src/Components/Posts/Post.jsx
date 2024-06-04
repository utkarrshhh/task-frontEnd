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

  console.log(quotes);

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
          overflowY: "visible",
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
          <div>Posts</div>
        )}
      </div>
    </>
  );
};

export default Post;
