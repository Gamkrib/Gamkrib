import React, { Children } from "react";
import { createBrowserRouter, Route, Router } from "react-router-dom";
import { AboutUs } from "../aboutus/AboutUs";
import { LandLordSignUp } from "../auth/LandLordSignUp";
import { LoginPage } from "../auth/LoginPage";
import { StudentSignUp } from "../auth/StudentSignUp";
import ErrorPage from "../error/ErrorPage";
import { Help } from "../help/Help";
import { LandingPage } from "../home/LandingPage";
import { Navbar } from "../navbar/Navbar";
import { NotificationComponent } from "../notification/NotificationComponent";
import { ApartmentComponent } from "../properties/ApartmentComponent";
import { HomestelComponent } from "../properties/HomestelComponent";
import { HostelComponent } from "../properties/HostelComponent";
import { ListProperties } from "../properties/ListProperties";
import { FilerProperty } from "../searchAndFilterContainer/FilerProperty";
import { AdminContainer } from "../admin/home/AdminContainer";

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
    path: "filterCard",
    element: <FilerProperty />,
  },
  {
    path: "notification",
    element: <NotificationComponent />,
  },
  {
    path: "dashboard",
    element: <AdminContainer />,
  },
]);

const IndexComponent = () => {
  return <>{/* <Navbar /> */}</>;
};

export default IndexComponent;
