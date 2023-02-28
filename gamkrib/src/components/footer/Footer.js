import React from "react";
import styled from "styled-components";
import { DescriptionText, ParentContainer } from "../../utils/modules/modules";

// social media icons import here
import twitter from "../../asserts/socialMediaIcons/Path.png";
import instagram from "../../asserts/socialMediaIcons/Vector-1.png";
import whatsApp from "../../asserts/socialMediaIcons/Vector-2.png";
import facebook from "../../asserts/socialMediaIcons/Vector.png";

export const Footer = () => {
  let year = new Date();

  return (
    <FooterContainer>
      <CenteredContainer
        style={{
          borderBottom: "1px solid #fff ",
          marginLeft: 20,
          marginRight: 20,
          paddingBottom: 10,
        }}
      >
        <ModifiedDescriptionText>
          se see what we have here
        </ModifiedDescriptionText>
        <div>
          <SocialIcon src={twitter} />
          <SocialIcon src={instagram} />
          <SocialIcon src={facebook} />
          <SocialIcon src={whatsApp} />
        </div>
      </CenteredContainer>
      <div style={{ marginTop: 10 }}>
        <ModifiedDescriptionText>
          @ {year.getFullYear()} GAMKRIB, All Right Reserved
        </ModifiedDescriptionText>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #1e1e1e;
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModifiedDescriptionText = styled(DescriptionText)`
  color: white;
`;
const CenteredContainer = styled.div`
  color: white;
  display: flex;
  width: 50vw;
  justify-content: space-between;
`;

const SocialIcon = styled.img`
  height: 18px;
  margin: 0 4px;
`;
