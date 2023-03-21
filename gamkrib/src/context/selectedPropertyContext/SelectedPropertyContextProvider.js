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

export const SelectedHostelContext = createContext();

export const SelectedHostelContextProvider = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <SelectedHostelContext.Provider value={{ value, setValue }}>
      {children}
    </SelectedHostelContext.Provider>
  );
};
