import React from "react";
import { Card } from "../../customComponetns/Card";
import { MidText, ParentContainer } from "../../utils/modules/modules";
import { BrowseProps } from "./BrowseProperties";

import assertImage1 from "../../asserts/images/Rectangle 22735-1.png";
import assertImage2 from "../../asserts/images/Rectangle 22735-2.png";
import assertImage3 from "../../asserts/images/Rectangle 22735.png";

export const PropertyType = () => {
  return (
    <div>
      <ParentContainer>
        <MidText>Browse Property Type</MidText>
        <BrowseProps>
          <Card
            image={assertImage3}
            name="Hostel"
            locationText="790,000 listed hostels"
          />
          <Card
            image={assertImage1}
            name="Homestel"
            locationText="790,000 listed homestel"
          />
          <Card
            image={assertImage2}
            name="Apartment"
            locationText="790,000 listed apartment"
          />
        </BrowseProps>
      </ParentContainer>
    </div>
  );
};
