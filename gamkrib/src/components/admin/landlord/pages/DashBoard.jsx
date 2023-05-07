import React, { useState } from "react";
import { Sidebar } from "../../utils/Sidebar";

export const DashBoard = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div>
      {activeMenu ? (
        <div className="w-72 fixed sidebar  bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">
          <Sidebar />
        </div>
      )}
    </div>
  );
};
