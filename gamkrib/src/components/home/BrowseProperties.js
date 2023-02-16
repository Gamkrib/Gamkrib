import React from "react";
import { Card } from "../../customComponetns/Card";
import { ParentContainer } from "../../utils/modules/modules";
import { BigText } from "./landingStyles";

export const BrowseProperties = () => {
  return (
    <ParentContainer>
      <BigText>Browse Properties</BigText>
      <Card
        name="Saint James Homestel"
        locationText="Tarkwa"
        review="4.5"
        price="300"
      />
    </ParentContainer>
  );
};
