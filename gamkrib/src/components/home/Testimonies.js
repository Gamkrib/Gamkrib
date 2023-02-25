import React from "react";
import styled from "styled-components";
import { RectangularCard } from "../../customComponetns/RectangularCard";
import { MidText, ParentContainer } from "../../utils/modules/modules";

import userMock1 from "../../asserts/mockImages/Ellipse 1178-1.png";
import userMock2 from "../../asserts/mockImages/Ellipse 1178-2.png";
import userMock3 from "../../asserts/mockImages/Ellipse 3.png";

export const Testimonies = () => {
  //will later implement auto scroll for this

  return (
    <TestimoniesContianer>
      <ParentContainer>
        <ModifiedMidText> What People Say About Us</ModifiedMidText>
        <RectangularCardContainer>
          <div>
            <RectangularCard image={userMock1} />
          </div>
          <div>
            <RectangularCard image={userMock2} />
          </div>
          <div>
            <RectangularCard image={userMock3} />
          </div>
        </RectangularCardContainer>
      </ParentContainer>
    </TestimoniesContianer>
  );
};

const TestimoniesContianer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  width: 100vw;
  overflow-x: scroll;
`;

const ModifiedMidText = styled(MidText)`
  color: white;
`;

const RectangularCardContainer = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]};
  justify-content: start;
  align-items: center;
`;
