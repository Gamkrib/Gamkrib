import React, { useState } from "react";
import { Sidebar } from "../../utils/Sidebar";
import { DashBoardNav, GeneralNavbar, Navbar } from "../../../navbar/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashBoardContextProvider } from "../../../../context/selectedPropertyContext/DashBoardContext";

export const DashBoard = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <DashBoardContextProvider>
      <div className="flex relative bg-[#f3f4f6] ">
        {activeMenu ? (
          <div className="w-72 fixed shadow sidebar  bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg   min-h-screen  w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static  w-full  ">
            <DashBoardNav />
            <Outlet />
          </div>
        </div>
      </div>
    </DashBoardContextProvider>
  );
};
