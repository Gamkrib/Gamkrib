import React, { useContext } from "react";
import { ParentContainer } from "../../utils/modules/modules";
import { SearchBar } from "../searchBar/SearchBar";
import styled from "styled-components";
import { MockApiContext } from "../../context/MockApiContext";
import { Card } from "../../customComponetns/Card";

export const HomestelComponent = () => {
  const { mockHotel, farm } = useContext(MockApiContext);

  return (
    <ParentContainer>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <CardContainer>
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
      </CardContainer>
    </ParentContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
