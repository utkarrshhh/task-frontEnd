// Layout.js
import React from "react";
// import Navbar from './Navbar';
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
    </>
  );
};

export default Layout;
