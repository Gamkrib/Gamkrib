import React from "react";
import { GeneralNavbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
import { BigText, BigTextWithoutMargin } from "../home/landingStyles";

export const ProductDetails = () => {
  return (
    <>
      <GeneralNavbar />
      <BigTextWithoutMargin>Name of Property</BigTextWithoutMargin>
      <Footer />
    </>
  );
};
