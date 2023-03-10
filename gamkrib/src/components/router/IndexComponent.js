import React, { Children } from "react";
import { createBrowserRouter, Route, Router } from "react-router-dom";
import { AboutUs } from "../aboutus/AboutUs";
import { LandLordSignUp } from "../auth/LandLordSignUp";
import { LoginPage } from "../auth/LoginPage";
import { StudentSignUp } from "../auth/StudentSignUp";
import { FilterCard } from "../cards/Modules/FilterCard";
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
  {
    path: "studentSignup",
    element: <StudentSignUp />,
  },
  {
    path: "landLordSignup",
    element: <LandLordSignUp />,
  },
  {
    path: "longInPage",
    element: <LoginPage />,
  },
  {
    path: "FilterCard",
    element: <FilterCard />,
  },
]);

const IndexComponent = () => {
  return <>{/* <Navbar /> */}</>;
};

export default IndexComponent;
