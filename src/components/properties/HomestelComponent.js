import React, { useContext, useMemo, useState } from "react";
import { ParentContainer } from "../../utils/modules/modules";
import { SearchBar } from "../searchAndFilterContainer/SearchBar";
import styled from "styled-components";
import { MockApiContext } from "../../context/MockApiContext";
import { Card } from "../../customComponetns/Card";
import { Footer } from "../footer/Footer";
import { FilerProperty } from "../searchAndFilterContainer/FilerProperty";
import { SelectedHostelContext } from "../../context/selectedPropertyContext/SelectedPropertyContextProvider";
import { FilterBtn } from "../../utils/searchModel/SearchComponent";
import { apiUrl, base, csrfToken } from "../apis/APIs";
import axios from "axios";
import { useEffect } from "react";
import { plainAPi } from "../auth/axios/axios";

export const HomestelComponent = () => {
  const { listedProperties, farm } = useContext(MockApiContext);
  const [properties, setProperties] = useState([])

  const { filter } = useContext(SelectedHostelContext);


  useEffect(() => {
    (async () => {
      try {
        const { data } = await plainAPi.get('properties')
        console.log(data)
      } catch (error) {

      }
    })()

  }, [])
  //==================== api int =============================//






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
          {listedProperties &&
            listedProperties.map((hotel) => {
              return (
                <Card
                  image={hotel.images[1]}
                  name={'Will Provide names Later'}
                  locationText={hotel.location}
                  review={hotel.review_score}
                  price={hotel?.price}
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
