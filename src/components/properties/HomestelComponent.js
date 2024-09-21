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
import { Skeleton } from "@mantine/core";

export const HomestelComponent = () => {
  const { listedProperties, farm } = useContext(MockApiContext);
  const [loading, setLoading] = useState(false)
  const [properties, setProperties] = useState([])

  const { filter } = useContext(SelectedHostelContext);


  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const { data: { data } } = await plainAPi.get('properties')
        setProperties(data)
        setLoading(false)
      } catch (error) {

      }
    })()

  }, [])
  //==================== api int =============================//



  console.log(properties)


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
          {loading ? <div style={{ display: 'flex' }}>
            {[1, 4, 5, 6, 4].map((a) => <div style={{ width: '400px' }}>

              <Skeleton height={8} radius="xl" />
              <Skeleton height={8} mt={6} radius="xl" />
              <Skeleton height={8} mt={6} width="300px" radius="xl" />
            </div>)}

          </div> : <>{properties &&
            properties?.map((hotel) => {
              return (
                <Card
                  det={hotel}
                  images={hotel.images}
                  id={hotel.id}
                  image={hotel.images[1]}
                  name={hotel?.gender}
                  locationText={hotel.location}
                  review={hotel.number_of_beds}
                  price={hotel?.price}
                />
              );
            })}</>}
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
