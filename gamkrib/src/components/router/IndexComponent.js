import React, { Children } from "react";
import { createBrowserRouter, Route, Router } from "react-router-dom";
import { AboutUs } from "../aboutus/AboutUs";
import ErrorPage from "../error/ErrorPage";
import { Help } from "../help/Help";
import { LandingPage } from "../home/LandingPage";
import { Navbar } from "../navbar/Navbar";
import { ApartmentComponent } from "../properties/ApartmentComponent";
import { HomestelComponent } from "../properties/HomestelComponent";
import { HostelComponent } from "../properties/HostelComponent";
import { ListProperties } from "../properties/ListProperties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
  {
    path: "listProperties",
    element: <ListProperties />,
    children: [
      { index: true, element: <HostelComponent /> },
      { path: "homestel", element: <HomestelComponent /> },
      { path: "apartment", element: <ApartmentComponent /> },
    ],
  },
]);

const IndexComponent = () => {
  return <>{/* <Navbar /> */}</>;
};

export default IndexComponent;
