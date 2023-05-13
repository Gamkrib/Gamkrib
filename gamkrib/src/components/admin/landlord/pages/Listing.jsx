import React from "react";
import { HeaderText, ParentContainer } from "../../../../utils/modules/modules";
import styled from "styled-components";

export const Listing = () => {
  return (
    <div style={{ backgroundColor: "#f3f4f6", marginTop: 0 }}>
      <DashboardContainer>
        <HeaderText>Now let the game begin</HeaderText>
      </DashboardContainer>
    </div>
  );
};

const DashboardContainer = styled.div`
  background-color: white;
  margin: ${(p) => p.theme.space[2]};
  border-radius: 1rem;
  padding: 1rem;
`;
