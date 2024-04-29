import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./Contexts/UserContextProvider.jsx";
import ProfileContextProvider from "./Contexts/ProfileContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProfileContextProvider>
        <App />
      </ProfileContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
