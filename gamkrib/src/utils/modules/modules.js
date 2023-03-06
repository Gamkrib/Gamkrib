import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BigText } from "../../components/home/landingStyles";

// export const DefaultBtn = ({ text }) => {
//   return <GreenBtn>{text}</GreenBtn>;
// };
// export const DefaultBtnOutLine = ({ text }) => {
//   return <GreenBtn>{text}</GreenBtn>;
// };

export const GreenBtn = styled(motion.button)`
  background-color: ${(p) => p.theme.colors.brand.primary};
  height: ${(p) => p.theme.sizes[4]};
  width: ${(p) => p.theme.sizes[6]};
  border-radius: ${(p) => p.theme.sizes[1]};
  color: white;
  font-size: ${(p) => p.theme.fontSizes.button};
  border: none;
  cursor: pointer;
`;
export const GreenBtnOutine = styled(motion.button)`
  background-color: transparent;
  height: ${(p) => p.theme.sizes[4]};
  width: ${(p) => p.theme.sizes[6]};
  border-radius: ${(p) => p.theme.sizes[1]};
  color: ${(p) => p.theme.colors.brand.primary};
  font-size: ${(p) => p.theme.fontSizes.button};
  border: solid 2px;
  border-color: ${(p) => p.theme.colors.brand.primary};
  margin-right: ${(p) => p.theme.sizes[1]};
  cursor: pointer;
`;

export const ParentContainer = styled.div`
  margin: 1.313rem 4.688rem;

  @media (max-width: 768px) {
    margin: 0.313rem 0.688rem;
  }
`;
export const NavContainer = styled.div`
  margin: 1.313rem 4.688rem;
  @media (max-width: 768px) {
    margin: 0.313rem 0.688rem;
  }
`;

export const HeaderText = styled.div`
  font-family: "Poppins";
  font-size: ${(p) => p.theme.fontSizes.title};
  font-weight: 500;
`;
export const DescriptionText = styled.div`
  font-family: "Poppins";
`;

export const FlexibleContainer = styled.div`
  width: 30rem;
  display: flex;
  margin-top: ${(p) => p.theme.space[2]};

  @media (max-width: 768px) {
    width: 90%;
    background-color: palegoldenrod;
    margin-top: ${(p) => p.theme.space[2]};
  }
`;

export const Spacer = styled.div`
  margin-top: ${(p) => p.theme.space[4]};
`;

export const MidText = styled(BigText)`
  font-size: ${(p) => p.theme.fontSizes.title};
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
