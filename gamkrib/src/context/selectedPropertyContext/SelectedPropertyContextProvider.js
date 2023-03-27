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
  const [propertyType, setPropertyType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [propertyRating, setPropertyRating] = useState("");
  const [filter, setFiler] = useState(false);
  return (
    <SelectedHostelContext.Provider
      value={{
        propertyType,
        setPropertyType,
        roomType,
        setRoomType,
        propertyRating,
        setPropertyRating,
        filter,
        setFiler,
      }}
    >
      {children}
    </SelectedHostelContext.Provider>
  );
};
