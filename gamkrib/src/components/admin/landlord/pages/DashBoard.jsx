import React, { useState } from "react";
import { Sidebar } from "../../utils/Sidebar";
import { GeneralNavbar, Navbar } from "../../../navbar/Navbar";

export const DashBoard = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      {activeMenu ? (
        <div className="w-72 fixed sidebar  bg-white ">
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
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg  w-full ">
          <GeneralNavbar />
        </div>
      </div>
    </div>
  );
};
