import { useState, createContext } from "react";

export const DashBoardContext = createContext();

export const DashBoardContextProvider = ({ children }) => {
  const [selectedList, setSelectedList] = useState("hello ");

  return (
    <DashBoardContext.Provider value={{ selectedList, setSelectedList }}>
      {children}
    </DashBoardContext.Provider>
  );
};
