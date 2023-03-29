import React from "react";
import styled from "styled-components";
import notificationIcon from "../../asserts/siteLogos/Combined-Shape.png";
import { GeneralNavbar } from "../navbar/Navbar";

export const NotificationComponent = () => {
  return (
    <>
      <GeneralNavbar />
      <ParentContainer>
        {/* This card will use a map function to map all notifications from the API */}
        <p style={{ fontFamily: "poppins", fontSize: "2rem" }}>
          {" "}
          Notification{" "}
        </p>

        <NotificationCard>
          <Icon>
            <img height="22px" src={notificationIcon} />
          </Icon>

          <NotificationBody>
            <NotificationHead>New Deal 🔥 </NotificationHead>
            <p>
              Just write some dummy text here for the sake of testing purpose
              only Just write some dummy text here for the sake of testing
              purpose only Just write some dummy text here for the sake of
              testing purpose only Just write some dummy text here for the sake
              of testing purpose only{" "}
            </p>
          </NotificationBody>
        </NotificationCard>
      </ParentContainer>{" "}
    </>
  );
};

const NotificationCard = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.colors.bg.light};
  height: 2.5rem;
  width: 5.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const NotificationHead = styled.div`
  font-family: "poppins";
  font-weight: 500;
  font-size: 1rem;
`;

const NotificationBody = styled.div``;

const ParentContainer = styled.div`
  margin: 4rem 25rem;
`;
