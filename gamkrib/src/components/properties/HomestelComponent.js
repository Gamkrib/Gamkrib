import React, { useContext, useState } from "react";
import { ParentContainer } from "../../utils/modules/modules";
import { SearchBar } from "../searchAndFilterContainer/SearchBar";
import styled from "styled-components";
import { MockApiContext } from "../../context/MockApiContext";
import { Card } from "../../customComponetns/Card";
import { Footer } from "../footer/Footer";
import { FilerProperty } from "../searchAndFilterContainer/FilerProperty";
import { SelectedHostelContext } from "../../context/selectedPropertyContext/SelectedPropertyContextProvider";
import { FilterBtn } from "../../utils/searchModel/SearchComponent";

export const HomestelComponent = () => {
  const { mockHotel, farm } = useContext(MockApiContext);

  const { filter } = useContext(SelectedHostelContext);

  const HomestelContainer = styled.div`
    height: 82vh;
    overflow: ${filter ? "hidden" : ""};
  `;

  return (
    <HomestelContainer>
      <ParentContainer>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>

        {filter && <FilerProperty />}
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
      <Footer />
    </HomestelContainer>
  );
};

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem 1rem;
`;
