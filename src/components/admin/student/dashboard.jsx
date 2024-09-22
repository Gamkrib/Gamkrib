import { Container, Paper } from "@mantine/core";
import React from "react";
import { Navbar } from "../../navbar/Navbar";
import { BigText, SmallText } from "../../home/landingStyles";
import {
  BigImage,
  ImageContainer,
  MainInfo,
  PreviewListing,
  SmallImge,
  SubImages,
} from "../landlord/pages/PropertyDetailsPage";
import { GreenBtnOutine } from "../../../utils/modules/modules";
import { GreenBtn } from "../../../customComponetns/BigButton";

export const DashboardStudent = () => {
  const p = localStorage.getItem("gamkribUserData");

  const s = localStorage.getItem("gamId");
  const details = JSON.parse(s);
  const userDetials = JSON.parse(p);
  console.log(details);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Container size={"xl"}>
        <h1> Welcome {userDetials?.username} </h1>
        <SmallText>Here is details of your room</SmallText>
        <MainInfo>
          <BigText style={{ fontWeight: 700, textAlign: "start" }}>
            Property Info
          </BigText>
          <ImageContainer>
            <BigImage>
              <PreviewListing src={details?.images[2]} />
            </BigImage>
            <SubImages>
              <SmallImge
                src={details?.images[1]}
                sizes="5rem"
                alt="img will be changed later "
              />
              <SmallImge src={details?.images[0]} sizes="5rem" alt="img" />
            </SubImages>
          </ImageContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60vw",
            }}
          >
            <div>
              <p style={{ fontSize: 25 }}>Gender: {details?.det?.gender} </p>
              <p style={{ fontSize: 25 }}>Location: {details?.locationText} </p>
              <p style={{ fontSize: 20 }}>
                Number of Beds: {details?.det?.number_of_beds}{" "}
              </p>
              <p style={{ fontSize: 20 }}>
                Number of rooms: {details?.det?.number_of_rooms}{" "}
              </p>
            </div>
            {/* <iframe
              width="600px"
              height="450px"
              style="border:0px"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA"
            ></iframe> */}
          </div>
          <BigText style={{ textAlign: "start", marginTop: 10 }}>
            Description
          </BigText>
          <p>
            This modern student room in the heart of Accra offers a spacious,
            fully furnished living space close to major universities like the
            University of Ghana. The room includes a bed, study desk, wardrobe,
            air conditioning, fast Wi-Fi, and a private balcony with city views.
            Residents share a fully equipped kitchen, modern bathroom, lounge
            area, and laundry facilities. Safety is prioritized with 24/7
            security, CCTV, and secure entry. Rent includes utilities, weekly
            cleaning, and access to maintenance services. Located near public
            transport and shops, it provides a perfect blend of convenience,
            comfort, and security for students. Flexible payment plans are
            available.
          </p>
        </MainInfo>
      </Container>
    </div>
  );
};
