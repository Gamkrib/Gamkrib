import React from "react";
import { createBrowserRouter, Route, Router } from "react-router-dom";
import { AboutUs } from "../aboutus/AboutUs";
import ErrorPage from "../error/ErrorPage";
import { Help } from "../help/Help";
import { LandingPage } from "../home/LandingPage";
import { Navbar } from "../navbar/Navbar";
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

      {
        path: "listProperties",
        element: <ListProperties />,
      },
    ],
  },
  ,
]);

const IndexComponent = () => {
  return <>{/* <Navbar /> */}</>;
};

export default IndexComponent;
