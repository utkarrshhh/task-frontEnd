import React, { useState } from "react";
import ProfileContext from "./ProfileContext";

const ProfileContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ProfileContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
