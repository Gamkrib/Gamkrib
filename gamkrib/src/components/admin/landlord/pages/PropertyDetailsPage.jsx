import React, { useEffect, useState } from "react";
import { GeneralNavbar } from "../../../navbar/Navbar";
import { Footer } from "../../../footer/Footer";
import { PageLayout } from "../../../../utils/modules/PageLayout";
import styled from "styled-components";
import { BigText } from "../../../home/landingStyles";
import dummyImage from "../../../../asserts/images/Rectangle 22766.png";
import dummyImage1 from "../../../../asserts/images/Rectangle 22735-1.png";
import dummyImage2 from "../../../../asserts/images/Rectangle 22735-2.png";
import dummyImage3 from "../../../../asserts/images/Rectangle 22735.png";
import { PreviewProps } from "../../../home/propertyDetails/PreviewProps";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl, csrfToken } from "../../../apis/APIs";
import { LoadingOverlay } from "@mantine/core";
export const PropertyDetailsPage = () => {
  const { roomDetails: roomID } = useParams();
  const [loading, setLoading] = useState(false);
  const [roomDetails, setRoomDetails] = useState();

  //fetching data for a specific room
  console.log(roomID, roomDetails);
  useEffect(() => {
    console.log("hi");
    const base = async (route) => {
      setLoading(true);
      try {
        const { data } = await axios(`${apiUrl}${route}/${roomID}`, {
          headers: {
            accept: "application/json",
            "X-CSRFToken": csrfToken,
          },
        });
        setRoomDetails(data);
        setLoading(false);
      } catch (error) {
        return console.log(error);
      }
    };
    base("listings");
  }, [roomID, apiUrl]);

  return (
    <>
      <GeneralNavbar />
      <LoadingOverlay
        visible={loading}
        loaderProps={{ color: "green", type: "bars" }}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <PreviewProps room={roomDetails} />

      <Footer />
    </>
  );
};

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
`;

const BigImage = styled.div`
  width: 50%;
`;
const SubImages = styled.div`
  width: 50%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PreviewListing = styled.img`
  width: 50rem;
`;
const SmallImge = styled.img`
  width: 22rem;
  height: 15rem;
  gap: 2rem;
`;
