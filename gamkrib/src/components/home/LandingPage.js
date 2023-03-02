import React, { useState } from "react";
import styled from "styled-components";
import { ParentContainer, Spacer } from "../../utils/modules/modules";
import {
  LandingImage,
  LandingScript,
  LandingText,
  SmallText,
} from "./landingStyles";

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

export const LandingPage = () => {
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <LandingContainer>
        <LandingScript>
          <LandingText>
            FIND YOUR OFF-CAMPUS ACCOMMODATION {<br />} WITH EASE.
          </LandingText>
          <SmallText>
            So we are writing some dommy text here because we have to write
            something, We have some beautiful friends {<br />} with nice hand
            writing brilliant and they are also nice to talk to
          </SmallText>
        </LandingScript>
        <LandingImage>
          <img src={landingImage} width="100%" />
        </LandingImage>
      </LandingContainer>
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
