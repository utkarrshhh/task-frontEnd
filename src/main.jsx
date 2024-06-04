import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./Contexts/UserContextProvider.jsx";
import ProfileContextProvider from "./Contexts/ProfileContextProvider.jsx";
import AboutContextProvider from "./Contexts/AboutContextProvider";
import QuotesContextProvider from "./Contexts/QuotesContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuotesContextProvider>
      <UserContextProvider>
        <ProfileContextProvider>
          <AboutContextProvider>
            <App />
          </AboutContextProvider>
        </ProfileContextProvider>
      </UserContextProvider>
    </QuotesContextProvider>
  </React.StrictMode>
);
