import React from "react";
import styled from "styled-components";
import {
  DescriptionText,
  GreenBtn,
  GreenBtnOutine,
  MidText,
  ParentContainer,
} from "../../utils/modules/modules";
import { FrequentlyAskedQuestions } from "./FrequentlyAskedQuestions";

import bgImage from "../../asserts/backgroundImages/helpBg.webp";
import { Footer } from "../footer/Footer";

export const Help = () => {
  return (
    <>
      <ParentContainer
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HelpContainer>
          <MidText>Welcome to the help Center</MidText>
        </HelpContainer>
        <ContactUsContainer>
          <div>
            <MidText
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              Let's Talk
            </MidText>
            <DescriptionText>
              This your go-to platform for connecting students and property <br />
              owners in a hassle-free way. Whether you need help finding the perfect <br />
              accommodation or have questions about your booking, our friendly
              <br />support team is here to assist. We're committed to making your
              <br />student living experience stress-free and enjoyable
            </DescriptionText>
            <BtnContainer>
              <GreenBtn whileTap={{ scale: 0.9 }}>WhatsApp</GreenBtn>
              <GreenBtnOutine whileTap={{ scale: 0.9 }}> Call</GreenBtnOutine>
            </BtnContainer>
          </div>
        </ContactUsContainer>
      </ParentContainer>
      <FrequentlyAskedQuestions />
      <Footer />
    </>
  );
};

const HelpContainer = styled.div`
  display: flex;
`;

const ContactUsContainer = styled.div`
  height: 43vh;

  background-image: url(${bgImage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 10rem;

  width: 62%;
  padding: 4rem 2rem;
`;

const BtnContainer = styled.div`
  margin-top: 40px;
  gap: 1rem;
  display: flex;
`;
