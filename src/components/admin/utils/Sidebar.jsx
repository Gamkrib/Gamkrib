import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
// import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { SelectedHostelContext } from "../../../context/selectedPropertyContext/SelectedPropertyContextProvider";
import { links } from "../utils/NavLinks";
import { Logo } from "../../../utils/modules/Logo";
import logo from "../../../asserts/conrImages/GAMKRIBLogoBig.webp";

// there is tailwind in the component for specific use

export const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useContext(
    SelectedHostelContext
  );

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 no-underline    text-black  text-md ";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 no-underline  text-md text-gray-700 dark:text-gray-200 hover:text-black hover:bg-[#bff1cb] m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto  pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between  items-center">
            <Link
              to="/dashboard"
              onClick={handleCloseSideBar}
              className="items-center gap-3 ml-3 mt-4 no-underline flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img src={logo} height="40px" className="w-[40px]" />
              <span>Gamkrib</span>
            </Link>
            <div content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-xl rounded-full  p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </div>
          </div>
          <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 no-underline uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/dashboard/${link.link}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? "#f7f7f7" : "",
                      borderRight: isActive ? "solid 6px #30d158" : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
