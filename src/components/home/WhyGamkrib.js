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
            <HeaderText>SAVES YOU TIME</HeaderText>
            <DescriptionText>
              Find your perfect off-campus accommodation in under 10 minutes
              with Gamkrib! Easily browse, compare prices and amenities, and
              book directly through the platform. Save time and hassle with
              Gamkrib – sign up now!"
            </DescriptionText>
          </div>
        </WhyContainer>
        <WhyContainer>
          <div>
            <ItemLogo src={logo3} />
          </div>
          <div>
            <HeaderText>SAVES YOU MONEY</HeaderText>
            <DescriptionText>
              Say goodbye to costly off-campus housing searches! With Gamkrib,
              you can find your dream home without paying any inspection or
              viewing fees. Our platform lets you browse everything from the
              comfort of your own home, eliminating the need for expensive
              travel. Let us help you save money and find the perfect room with
              ease
            </DescriptionText>
          </div>
        </WhyContainer>
        <WhyContainer>
          <div>
            <ItemLogo src={logo1} />
          </div>
          <div>
            <HeaderText>VARIETY TO CHOOSE FROM</HeaderText>
            <DescriptionText>
              On Gamkrib, you can find hostels, homestels, apartments and single
              rooms among other types of properties.
            </DescriptionText>
          </div>
        </WhyContainer>
      </GrayBackground>
    </ParentContainer>
  );
};
