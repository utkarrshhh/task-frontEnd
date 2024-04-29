import React, { useState } from "react";
import AboutContext from "./AboutContext";

const AboutContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [name,setUs] = useState("");

  return (
    <AboutContext.Provider value={{ name, setName, email, setEmail }}>
      {children}
    </AboutContext.Provider>
  );
};

export default AboutContextProvider;
