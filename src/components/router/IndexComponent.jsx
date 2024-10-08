import React from "react";
import { createBrowserRouter } from "react-router-dom";
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
import { ListProperties } from "../properties/ListProperties";
import { FilerProperty } from "../searchAndFilterContainer/FilerProperty";
import { ProductDetails } from "../productDetails/ProductDetails";
import { DashBoard } from "../admin/landlord/pages/DashBoard";

import { Listing } from "../admin/landlord/pages/Listing";
import { Sales } from "../admin/landlord/pages/Sales";
import { Payment } from "../admin/landlord/pages/Payment";
import { Review } from "../admin/landlord/pages/Review";
import { General } from "../admin/landlord/pages/General";
import { ParentListing } from "../admin/landlord/pages/ParentListing";
import { PropertyDetails } from "../admin/landlord/subPages/propertyListing/PropertyDetetails";
import { RoomDetetails } from "../admin/landlord/subPages/propertyListing/RoomDetetails";
import { RoomPricing } from "../admin/landlord/subPages/propertyListing/RoomPricing";
import { FacilityAmenities } from "../admin/landlord/subPages/propertyListing/FacilityAmenities";
import { PropertyDetailsPage } from "../admin/landlord/pages/PropertyDetailsPage";

import { ImagePrev } from "../admin/landlord/subPages/propertyListing/ImagePrev";
import { DashboardStudent } from "../admin/student/dashboard";

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
      { index: true, element: <HomestelComponent /> },
      { path: "homestel", element: <HomestelComponent /> },
      { path: "apartment", element: <ApartmentComponent /> },
    ],
  },
  {
    path: "studentSignup",
    element: <StudentSignUp />,
  },
  {
    path: "propertydetailpage",
    element: <PropertyDetailsPage />,
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
    element: <DashBoard />,
    children: [
      { index: true, element: <General /> },
      {
        path: "listing",
        element: <ParentListing />,
        children: [
          { index: true, element: <Listing /> },
          { path: "propertyDetails", element: <PropertyDetails /> },
          { path: "preview", element: <ImagePrev /> },
          { path: "roomDetails", element: <RoomDetetails /> },
          { path: "roomPricing", element: <RoomPricing /> },
          { path: "facilityamenity", element: <FacilityAmenities /> },
        ],
      },
      { path: "sales", element: <Sales /> },
      { path: "payment", element: <Payment /> },
      { path: "review", element: <Review /> },
    ],
  },

  {
    path: "productDetails",
    element: <ProductDetails />,
  },
  {
    path: "student-dashboard",
    element: <DashboardStudent />,
  },
]);

const IndexComponent = () => {
  return <>{/* <Navbar /> */}</>;
};

export default IndexComponent;
