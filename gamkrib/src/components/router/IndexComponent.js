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
import { ProductDetails } from "../productDetails/ProductDetails";
import { DashBoard } from "../admin/landlord/pages/DashBoard";

import { Listing } from "../../components/admin/landlord/pages/Listing";
import { Sales } from "../../components/admin/landlord/pages/Sales";
import { Payment } from "../../components/admin/landlord/pages/Payment";
import { Review } from "../../components/admin/landlord/pages/Review";
import { General } from "../../components/admin/landlord/pages/General";
import { ParentListing } from "../admin/landlord/pages/ParentListing";
import { PropertyDetails } from "../admin/landlord/subPages/propertyListing/PropertyDetetails";
import Preview from "../admin/landlord/subPages/propertyListing/imageUploader/ImagePrev";
import { RoomDetetails } from "../admin/landlord/subPages/propertyListing/RoomDetetails";
import { RoomPricing } from "../admin/landlord/subPages/propertyListing/RoomPricing";
import { FacilityAmenities } from "../admin/landlord/subPages/propertyListing/FacilityAmenities";
import { PropertyDetailsPage } from "../admin/landlord/pages/PropertyDetailsPage";

import { ImagePrev } from "../admin/landlord/subPages/propertyListing/ImagePrev";




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

  // {
  //   path: "listProperties",
  //   element: <ListProperties />,
  //   children: [
  //     { index: true, element: <HostelComponent /> },
  //     { path: "homestel", element: <HomestelComponent /> },
  //     { path: "apartment", element: <ApartmentComponent /> },
  //   ],
  // },
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
  // {
  //   path: "waitlist",
  //   element: <WaitList />,
  // },
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
]);

const IndexComponent = () => {
  return <>{/* <Navbar /> */}</>;
};

export default IndexComponent;
