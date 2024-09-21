import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ParentContainer, Spacer } from "../../utils/modules/modules";
import {
  LandingImage,
  LandingScript,
  LandingText,
  SmallText,
} from "./landingStyles";

import "../admin/landlord/pageStyles/taileindInit.css";

import landingImage from "../../asserts/images/Frame299.png";
import { WhyGamkrib } from "./WhyGamkrib";
import { Card } from "../../customComponetns/Card";
import { BrowseProperties } from "./FeaturedProperties";
import { PropertyType } from "./PropetyType";
import { RectangularCard } from "../../customComponetns/RectangularCard";
import { Testimonies } from "./Testimonies";
import { PropertyManagers } from "./PropertyManagers";
import {
  FrequentlyAskedQuestions,
  Help,
} from "../help/FrequentlyAskedQuestions";
import { EmailSubscriptions } from "../email/EmailSubscriptions";
import { Footer } from "../footer/Footer";
import { MockApiContext } from "../../context/MockApiContext";
import { Container } from "@mantine/core";
import { Link } from "react-router-dom";




export const Banner = (props) => {
  console.log(props, 1)
  return <LandingContainer>
    <LandingScript>
      <LandingText>
        FIND YOUR OFF-CAMPUS ACCOMMODATION {<br />} WITH EASE.
      </LandingText>
      <SmallText>
        Say Goodbye To the stress of finding accommodation off-campus
      </SmallText>
      {props.search && <div>{props.search}</div>}
    </LandingScript>
    <LandingImage>
      <img src={landingImage} width="100%" />
    </LandingImage>
  </LandingContainer>
}

export const LandingPage = () => {

  //------------------------ listing api----------------//
  const { listedProperties, farm } = useContext(MockApiContext);

  const [scroll, setScroll] = useState(0);

  return (
    <>
      <Banner />
      <Spacer />
      <WhyGamkrib />
      <Spacer />
      <PropertyType />
      <Spacer />
      <Container size='xl'>


        <CardContainer>
          {listedProperties &&
            listedProperties.map((hotel) => {
              return (
                <Link style={{ textDecoration: 'none', color: 'ButtonText' }} to={`propertydetailpage/${hotel?.id}`}>
                  <Card
                    images={hotel.images}
                    image={hotel.images[0]}
                    name={hotel.property_name}
                    locationText={hotel.location}
                    review={hotel.review_score}
                    price={hotel?.price}
                  />
                </Link>
              );
            })}
        </CardContainer>
      </Container>
      {/* <BrowseProperties scroll={scroll} /> */}

      {/* <Testimonies /> */}
      {/* <PropertyManagers /> */}
      <FrequentlyAskedQuestions />
      <EmailSubscriptions />
      <Footer />
    </>
  );
};

const LandingContainer = styled(ParentContainer)`
  display: flex;
`;


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem 1rem;
`;
