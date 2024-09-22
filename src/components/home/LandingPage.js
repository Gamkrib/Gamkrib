import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ParentContainer, Spacer } from "../../utils/modules/modules";
import {
  LandingImage,
  LandingScript,
  LandingText,
  SmallText,
} from "./landingStyles";

import "../admin/landlord/pageStyles/taileindInit.css";

import landingImage from "../../asserts/images/Frame299.png";
import { WhyGamkrib } from "./WhyGamkrib";
import { Card } from "../../customComponetns/Card";
import { BrowseProperties } from "./FeaturedProperties";
import { PropertyType } from "./PropetyType";
import { RectangularCard } from "../../customComponetns/RectangularCard";
import { Testimonies } from "./Testimonies";
import { PropertyManagers } from "./PropertyManagers";
import {
  FrequentlyAskedQuestions,
  Help,
} from "../help/FrequentlyAskedQuestions";
import { EmailSubscriptions } from "../email/EmailSubscriptions";
import { Footer } from "../footer/Footer";




export const Banner = (props) => {
  console.log(props, 1)
  return <LandingContainer>
    <LandingScript>
      <LandingText>
        FIND YOUR OFF-CAMPUS ACCOMMODATION {<br />} WITH EASE.
      </LandingText>
      <SmallText>
        Welcome to Gamkrib, the ultimate student accommodation platform designed to make your housing search in Accra stress-free. We connect students with a wide range of affordable, secure, and conveniently located living spaces close to major universities. Whether you're looking for a private room or shared apartment, our listings come with detailed descriptions, virtual tours, and easy booking options. With 24/7 support, flexible payment plans, and verified landlords, we ensure you find the perfect home to focus on your studies and enjoy student life. Start your search today and experience hassle-free accommodation with Gamkrib!
      </SmallText>
      {props.search && <div>{props.search}</div>}
    </LandingScript>
    <LandingImage>
      <img src={landingImage} width="100%" />
    </LandingImage>
  </LandingContainer>
}

export const LandingPage = () => {

  //------------------------ listing api----------------//


  const [scroll, setScroll] = useState(0);

  return (
    <>
      <Banner />
      <Spacer />
      <WhyGamkrib />
      <Spacer />
      <PropertyType />
      <Spacer />
      <BrowseProperties scroll={scroll} />
      <Testimonies />
      <PropertyManagers />
      <FrequentlyAskedQuestions />
      <EmailSubscriptions />
      <Footer />
    </>
  );
};

const LandingContainer = styled(ParentContainer)`
  display: flex;
`;
