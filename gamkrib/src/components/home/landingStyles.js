import styled from "styled-components";

export const LandingScript = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;

export const LandingImage = styled.div``;

export const LandingText = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: ${(p) => p.theme.sizes[5]};
  font-weight: 700;
`;

export const SmallText = styled.div`
  margin-top: 1rem;
`;

/*=================================== Why Gamkrib Style                    */

export const GrayBackground = styled.div`
  background-color: ${(p) => p.theme.colors.ui.darkGray};
  display: flex;
  border-radius: 60px;
  padding: 4rem;

  justify-content: space-around;
`;
export const ItemLogo = styled.img`
  height: 29px;
  margin-right: 20px;
`;
export const WhyContainer = styled.div`
  width: 30rem;
  display: flex;
`;

export const BigText = styled.div`
  font-family: "poppins";
  font-size: ${(p) => p.theme.fontSizes.h4};
  text-align: center;
  margin-bottom: ${(p) => p.theme.space[5]};
`;
