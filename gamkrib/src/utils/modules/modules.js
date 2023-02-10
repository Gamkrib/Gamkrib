import styled from "styled-components";

// export const DefaultBtn = ({ text }) => {
//   return <GreenBtn>{text}</GreenBtn>;
// };
// export const DefaultBtnOutLine = ({ text }) => {
//   return <GreenBtn>{text}</GreenBtn>;
// };

export const GreenBtn = styled.button`
  background-color: ${(p) => p.theme.colors.brand.primary};
  height: ${(p) => p.theme.sizes[4]};
  width: ${(p) => p.theme.sizes[6]};
  border-radius: ${(p) => p.theme.sizes[1]};
  color: white;
  font-size: ${(p) => p.theme.fontSizes.button};
  border: none;
`;
export const GreenBtnOutine = styled.button`
  background-color: white;
  height: ${(p) => p.theme.sizes[4]};
  width: ${(p) => p.theme.sizes[6]};
  border-radius: ${(p) => p.theme.sizes[1]};
  color: ${(p) => p.theme.colors.brand.primary};
  font-size: ${(p) => p.theme.fontSizes.button};
  border: solid 2px;
  border-color: ${(p) => p.theme.colors.brand.primary};
  margin-right: ${(p) => p.theme.sizes[1]};
`;

export const ParentContainer = styled.div`
  margin: 1.313rem 4.688rem;
`;
export const NavContainer = styled.div`
  margin: 1.313rem 4.688rem;
`;
