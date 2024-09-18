import React, { useContext } from "react";
import { Card } from "../../customComponetns/Card";
import { MidText, ParentContainer } from "../../utils/modules/modules";
import { BrowseProps } from "./FeaturedProperties";

import assertImage1 from "../../asserts/images/Rectangle 22735-1.png";
import assertImage2 from "../../asserts/images/Rectangle 22735-2.png";
import assertImage3 from "../../asserts/images/Rectangle 22735.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SelectedPropertyContext } from "../../context/selectedPropertyContext/SelectedPropertyContextProvider";

export const PropertyType = () => {
  const { setIsActive } = useContext(SelectedPropertyContext);

  return (
    <div>
      <ParentContainer>
        <MidText>Browse Property Type</MidText>
        <BrowseProps>
          <StyledLink
            onClick={() => setIsActive("hostel")}
            to={"/listProperties"}
          >
            <Card
              image={assertImage3}
              name="Hostel"
              locationText="790,000 listed hostels"
            />
          </StyledLink>
          <StyledLink
            onClick={() => setIsActive("homestel")}
            to={"/listProperties/homestel"}
          >
            <Card
              image={assertImage1}
              name="Homestel"
              locationText="790,000 listed homestel"
            />
          </StyledLink>
          <StyledLink
            onClick={() => setIsActive("apartment")}
            to={"/listProperties/apartment"}
          >
            <Card
              image={assertImage2}
              name="Apartment"
              locationText="790,000 listed apartment"
            />
          </StyledLink>
        </BrowseProps>
      </ParentContainer>
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
