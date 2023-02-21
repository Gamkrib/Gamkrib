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
import { BrowseProperties } from "./BrowseProperties";
import { PropertyType } from "./PropetyType";

export const LandingPage = () => {
  const [scroll, setScroll] = useState(0);

  return (
    <>
      <LandingContainer>
        <LandingScript>
          <LandingText>
            Find off - campus accommodation with {<br />} ease.
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
    </>
  );
};

const LandingContainer = styled(ParentContainer)`
  display: flex;
`;
