import React from "react";
import { DashboardContainer } from "./Listing";
import cahBg from "../../../../asserts/landlord/Frame297.svg";
import transaction from "../../../../asserts/landlord/Swap.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SmallText } from "../../../home/landingStyles";
import { HeaderText } from "../../../../utils/modules/modules";

export const Payment = () => {
  return (
    <DashboardContainer
      whileTap={{
        scale: 0.9,
      }}
    >
      <GenericCard>
        <img
          src={transaction}
          style={{
            background: "white",
            margin: "5px",
            padding: "5px",
            borderRadius: "20px",
          }}
        />
        <SmallText> Payment Pending </SmallText>
        <HeaderText>GHS 3,000</HeaderText>
      </GenericCard>
    </DashboardContainer>
  );
};

const GenericCard = styled(motion.div)`
  background-image: url(${cahBg});
  height: 10rem;
  width: 20rem;
  background-size: contain;
  padding: 1rem;
`;
