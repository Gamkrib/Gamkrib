import React from "react";
import { Listing } from "../listining/Listing";
import { GeneralNavbar } from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";

export const AdminContainer = () => {
  return (
    <>
      <GeneralNavbar />
      <Listing />
      <Footer />
    </>
  );
};
