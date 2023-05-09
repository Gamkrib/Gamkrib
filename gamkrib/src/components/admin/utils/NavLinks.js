import { TbLogout } from "react-icons/tb";
import { RxPencil2 } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";

import { BiWalletAlt } from "react-icons/bi";

import { RiContactsLine } from "react-icons/ri";
import { MdOutlineHelpOutline, MdOutlineInsertChart } from "react-icons/md";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        link: "",
        icon: <FiShoppingBag />,
      },
      {
        name: "My Listing",
        link: "listing",
        icon: <RxPencil2 />,
      },
      {
        name: "Sales",
        link: "sales",
        icon: <MdOutlineInsertChart />,
      },
      {
        name: "Payment",
        link: "payment",
        icon: <BiWalletAlt />,
      },
      {
        name: "Review",
        link: "review",
        icon: <RiContactsLine />,
      },
    ],
  },

  {
    title: "Account",
    links: [
      {
        name: "Help",
        link: "help",
        icon: <MdOutlineHelpOutline />,
      },
      {
        name: "Log out",
        link: "logout",
        icon: <TbLogout />,
      },
    ],
  },
];
