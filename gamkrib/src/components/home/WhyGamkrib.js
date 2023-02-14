import React from "react";
import {
  DescriptionText,
  HeaderText,
  ParentContainer,
} from "../../utils/modules/modules";
import {
  BigText,
  GrayBackground,
  ItemLogo,
  WhyContainer,
} from "./landingStyles";

import logo1 from "../../asserts/siteLogos/choice.png";
import logo2 from "../../asserts/siteLogos/clock 1.png";
import logo3 from "../../asserts/siteLogos/piggy-bank 1.png";

export const WhyGamkrib = () => {
  return (
    <ParentContainer>
      <BigText> Why Gamkrib</BigText>
      <GrayBackground>
        <WhyContainer>
          <div>
            <ItemLogo src={logo2} />{" "}
          </div>
          <div>
            <HeaderText>Save your time</HeaderText>
            <DescriptionText>
              Est reprehenderit ut Lorem ex. Cillum anim commodo sit enim enim
              labore pariatur laborum ex ullamco aliqua minim aute laboris.
              Aliquip proident sunt labore occaecat proident qui velit. Deserunt
              minim aliqua ut et consectetur sint irure magna eu enim consequat
              incididunt incididunt. Voluptate occaecat minim anim magna mollit
              tempor. Non in in reprehenderit sint est eiusmod anim. Aliquip
              consectetur eiusmod ut mollit ipsum elit adipisicing dolor velit.{" "}
            </DescriptionText>
          </div>
        </WhyContainer>
        <WhyContainer>
          <div>
            <ItemLogo src={logo3} />
          </div>
          <div>
            <HeaderText>Save your money</HeaderText>
            <DescriptionText>
              On average 20%, as much as 30%-50% of your money when compared to
              other hostel sites
            </DescriptionText>
          </div>
        </WhyContainer>
        <WhyContainer>
          <div>
            <ItemLogo src={logo1} />
          </div>
          <div>
            <HeaderText>Variety to choose from</HeaderText>
            <DescriptionText>
              Est reprehenderit ut Lorem ex. Cillum anim commodo sit enim enim
              labore pariatur laborum ex ullamco aliqua minim aute laboris.
              Aliquip proident sunt labore occaecat proident qui velit. Deserunt
              minim aliqua ut et consectetur sint irure magna eu enim consequat
              incididunt incididunt. Voluptate occaecat minim anim magna mollit
              tempor. Non in in reprehenderit sint est eiusmod anim. Aliquip
              consectetur eiusmod ut mollit ipsum elit adipisicing dolor velit.{" "}
            </DescriptionText>
          </div>
        </WhyContainer>
      </GrayBackground>
    </ParentContainer>
  );
};
