import React from "react";
import styled from "styled-components";
import { ParentContainer } from "../../utils/modules/modules";
import {
  LandingImage,
  LandingScript,
  LandingText,
  SmallText,
} from "./landingStyles";

import landingImage from "../../asserts/images/Frame299.png";

export const LandingPage = () => {
  return (
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
        <img src={landingImage} />
      </LandingImage>
    </LandingContainer>
  );
};

const LandingContainer = styled(ParentContainer)`
  display: flex;
`;
