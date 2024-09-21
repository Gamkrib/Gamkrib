import React from "react";
import styled from "styled-components";

import picture from "../asserts/mockImages/Rectangle 22735.png";
import icon from "../asserts/siteLogos/Vector.png";
import reviewIcon from "../asserts/siteLogos/Vector(1).png";
import { motion } from "framer-motion";
import { SmallText } from "../components/home/landingStyles";
import { DescriptionText } from "../utils/modules/modules";
import { useNavigate } from "react-router-dom";
import { image } from "@cloudinary/url-gen/qualifiers/source";

export const Card = (props) => {
  const nav = useNavigate()
  const propertyDetails = (id) => {
    const d = JSON.stringify(props)
    localStorage.setItem('gamId', d)
    nav('/propertydetailpage')
  }
  console.log(props.images)
  return (
    <motion.div whileTap={{ scale: 0.9 }} onClick={() => propertyDetails(props.id)}>
      <Image src={props.image || picture} />
      <div>
        <DescriptionText>Gender: {props.name} </DescriptionText>
      </div>

      <CardDescription>
        {props.locationText && (
          <div>

            <LocationText>Location: {props.locationText}</LocationText>
          </div>
        )}
        {props.review && (
          <div>

            <LocationText>Number 0f beds: {props.review}</LocationText>
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
