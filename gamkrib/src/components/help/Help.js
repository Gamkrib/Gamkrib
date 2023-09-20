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
import { Paper } from "@mantine/core";

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
              support team is always available to assist students with any questions
              <br></br>
              or concerns they may have.

            </DescriptionText>
            <BtnContainer>
              <a href='https://wa.me/+233554366620' target="_black">
                <GreenBtn whileTap={{ scale: 0.9 }} href='https://wa.me/+233554366620' >WhatsApp</GreenBtn>
              </a>

              <GreenBtnOutine whileTap={{ scale: 0.9 }}> Call </GreenBtnOutine>
              <Paper sx={{ width: '7rem', marginRight: '10rem', textAlign: 'center' }}>
                0554366620
              </Paper>
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
