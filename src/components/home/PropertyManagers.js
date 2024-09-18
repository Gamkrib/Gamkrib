import React from "react";
import styled from "styled-components";
import { BigButton } from "../../customComponetns/BigButton";
import {
  DescriptionText,
  GreenBtn,
  ParentContainer,
} from "../../utils/modules/modules";
import { BigText } from "./landingStyles";

export const PropertyManagers = () => {
  return (
    <ModifiedParentContainer>
      <BigText>Landlords or Property Managers</BigText>
      <div>
        <DescriptionText>
          Post your listing and market to thousands of students
        </DescriptionText>
      </div>
      <BigButton title="List Properties" />
    </ModifiedParentContainer>
  );
};

const ModifiedParentContainer = styled(ParentContainer)`
  display: flex;
  flex-direction: column;
  height: 25rem;
  background-color: ${(p) => p.theme.colors.bg.light};
  margin: 0;
  justify-content: center;
  align-items: center;
`;
