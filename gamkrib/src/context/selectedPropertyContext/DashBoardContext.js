import { useState, createContext } from "react";

export const DashBoardContext = createContext();

export const DashBoardContextProvider = ({ children }) => {
  const [selectedList, setSelectedList] = useState("hello ");
  const [isActive, setIsActive] = useState("active");

  return (
    <DashBoardContext.Provider
      value={{ selectedList, isActive, setIsActive, setSelectedList }}
    >
      {children}
    </DashBoardContext.Provider>
  );
};
