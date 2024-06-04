import React, { useState } from "react";
import QuotesContext from "./QuotesContext";
// import ProfileContext from "./ProfileContext";

const QuotesContextProvider = ({ children }) => {
  const [quotes, setQuotes] = useState();
  return (
    <QuotesContext.Provider value={{ quotes, setQuotes }}>
      {children}
    </QuotesContext.Provider>
  );
};

export default QuotesContextProvider;
