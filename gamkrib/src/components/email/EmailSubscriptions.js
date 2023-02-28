import React from "react";
import {
  DescriptionText,
  MidText,
  ParentContainer,
} from "../../utils/modules/modules";

export const EmailSubscriptions = () => {
  return (
    <div>
      <ParentContainer
        style={{
          display: "flex",
          height: "255px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <MidText> Stay Updated</MidText>
          <DescriptionText style={{ textAlign: "center" }}>
            Join our mailing list to receive special deals and amazing surprises
          </DescriptionText>
        </div>
      </ParentContainer>
    </div>
  );
};
