import React, { useContext } from "react";
import styled from "styled-components";
import { MockApiContext } from "../../context/MockApiContext";
import { Card } from "../../customComponetns/Card";
import { ParentContainer } from "../../utils/modules/modules";
import { BigText } from "./landingStyles";

export const BrowseProperties = () => {
  const { mockHotel, farm } = useContext(MockApiContext);

  console.log(mockHotel);

  return (
    <ParentContainer>
      <BigText>Browse Properties</BigText>
      <BrowseProps>
        {mockHotel &&
          mockHotel.map((hotel) => {
            return (
              <Card
                image={hotel.max_1440_photo_url}
                name={hotel.hotel_name}
                locationText={hotel.address}
                review={hotel.review_score}
                price="300"
              />
            );
          })}
      </BrowseProps>
    </ParentContainer>
  );
};

const BrowseProps = styled.div`
  display: flex;
  gap: ${(p) => p.theme.space[2]};
  scroll-behavior: smooth;
  overflow: scroll;
  justify-content: center;
`;
