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
