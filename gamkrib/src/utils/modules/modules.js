import { motion } from "framer-motion";
import styled from "styled-components";

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
  background-color: white;
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
`;
export const NavContainer = styled.div`
  margin: 1.313rem 4.688rem;
`;
