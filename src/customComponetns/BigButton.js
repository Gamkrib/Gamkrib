import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import icon from "../asserts/siteLogos/Vector(3).png";
import { Link } from "react-router-dom";

export const BigButton = (props) => {
  return (
    <Link style={{ textDecoration: 'none' }} to={props?.navLink}>
      <GreenBtn whileTap={{ scale: 0.9 }}>
        {props.title}
        <img width={25} alt="" height={15} src={props.icon || icon} />
      </GreenBtn>
    </Link>

  );
};

export const GreenBtn = styled(motion.div)`
  display: flex;
  background-color: ${(p) => p.theme.colors.brand.primary};
  height: 62px;
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
