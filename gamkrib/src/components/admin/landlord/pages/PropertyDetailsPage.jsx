import React from "react";
import { GeneralNavbar } from "../../../navbar/Navbar";
import { Footer } from "../../../footer/Footer";
import { PageLayout } from "../../../../utils/modules/PageLayout";
import styled from "styled-components";
import { BigText } from "../../../home/landingStyles";
import dummyImage from "../../../../asserts/images/Rectangle 22766.png";
import dummyImage1 from "../../../../asserts/images/Rectangle 22735-1.png";
import dummyImage2 from "../../../../asserts/images/Rectangle 22735-2.png";
import dummyImage3 from "../../../../asserts/images/Rectangle 22735.png";
export const PropertyDetailsPage = () => {
  return (
    <>
      <GeneralNavbar />

      <PageLayout>
        <MainInfo>
          <BigText style={{ fontWeight: 700, textAlign: "start" }}>
            Property Info
          </BigText>
          <ImageContainer>
            <BigImage>
              <PreviewListing src={dummyImage} />
            </BigImage>
            <SubImages>
              <SmallImge
                src={dummyImage}
                sizes="5rem"
                alt="img will be changed later "
              />
              <SmallImge src={dummyImage1} sizes="5rem" alt="img" />
              <SmallImge src={dummyImage2} sizes="5rem" alt="img" />
              <SmallImge src={dummyImage3} sizes="5rem" alt="img" />
            </SubImages>
          </ImageContainer>
        </MainInfo>
      </PageLayout>
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
