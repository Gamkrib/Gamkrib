import React from "react";
import styled from "styled-components";

import picture from "../asserts/mockImages/Rectangle 22735.png";
import icon from "../asserts/siteLogos/Vector.png";
import reviewIcon from "../asserts/siteLogos/Vector(1).png";
import { motion } from "framer-motion";
import { SmallText } from "../components/home/landingStyles";
import { DescriptionText } from "../utils/modules/modules";

export const Card = (props) => {
  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Image src={props.image || picture} />
      <div>
        <DescriptionText>{props.name} </DescriptionText>
      </div>

      <CardDescription>
        {props.locationText && (
          <div>
            {props.icon && <IconImage src={props.icon || icon} />}
            <LocationText> {props.locationText}</LocationText>
          </div>
        )}
        {props.review && (
          <div>
            <IconImage src={props.reviewIcon || reviewIcon} />
            <LocationText> {props.review}</LocationText>
          </div>
        )}
      </CardDescription>
      <div>
        {props.price && (
          <DescriptionText>
            From <LitleBigText>GHC {props.price} </LitleBigText>
          </DescriptionText>
        )}
      </div>
    </motion.div>
  );
};

const Image = styled.img`
  width: 327px;
  height: 317px;
  border-radius: 30px;
`;
const IconImage = styled.img`
  width: 17px;
  height: 17px;
`;

export const LocationText = styled.small`
  font-family: "poppins";
  color: ${(p) => p.theme.colors.text.secondary};
`;

const CardDescription = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]};
`;

export const LitleBigText = styled.span`
  font-weight: 500;
  font-family: "poppins";
`;
