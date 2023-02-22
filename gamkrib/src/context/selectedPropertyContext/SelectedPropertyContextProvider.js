import React, { createContext, useState } from "react";

export const SelectedPropertyContext = createContext();

export const SelectedPropertyContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState("hostel");

  return (
    <SelectedPropertyContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </SelectedPropertyContext.Provider>
  );
};
