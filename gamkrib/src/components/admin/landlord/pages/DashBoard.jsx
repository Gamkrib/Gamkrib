import React, { useState } from "react";
import { Sidebar } from "../../utils/Sidebar";
import { DashBoardNav, GeneralNavbar, Navbar } from "../../../navbar/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

export const DashBoard = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className="flex relative  bg-main-dark-bg">
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
        <div className="fixed md:static bg-main-bg  w-full shadow-sm">
          <DashBoardNav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};
