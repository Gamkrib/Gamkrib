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

  const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };

  //new navbar
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  return (
    <SelectedHostelContext.Provider
      value={{
        screenSize,
        setScreenSize,
        currentColor,
        setCurrentColor,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        currentMode,
        setCurrentMode,
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
