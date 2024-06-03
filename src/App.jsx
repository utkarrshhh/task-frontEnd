import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import Navbar from "./Components/Navbar/Navbar";
import Quote from "./Components/Quote/Quote";
import Post from "./Components/Posts/Post";
import Notification from "./Components/Notification/Notification";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<Quote />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
