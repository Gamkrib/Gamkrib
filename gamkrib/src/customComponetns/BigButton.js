import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import icon from "../asserts/siteLogos/Vector(3).png";

export const BigButton = (props) => {
  return (
    <GreenBtn whileTap={{ scale: 0.9 }}>
      {props.title}
      <img width={25} height={15} src={props.icon || icon} />
    </GreenBtn>
  );
};

export const GreenBtn = styled(motion.div)`
  display: flex;
  background-color: ${(p) => p.theme.colors.brand.primary};
  height: 42px;
  width: ${(p) => p.theme.sizes[8]};
  border-radius: ${(p) => p.theme.sizes[1]};
  color: white;
  font-size: ${(p) => p.theme.fontSizes.button};
  border: none;
  cursor: pointer;
  font-family: "poppins";
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;
