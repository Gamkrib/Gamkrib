import React, { useContext } from "react";
import {
  GreenBtn,
  HeaderText,
  ParentContainer,
} from "../../../../utils/modules/modules";
import styled from "styled-components";
import { DashBoardContext } from "../../../../context/selectedPropertyContext/DashBoardContext";
import { MdOutlineAddBox } from "react-icons/md";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { colors } from "../../../../theme/colors";

import "./minorStyles.css";

export const Listing = () => {
  const { selectedList, isActive, setSelectedList, setIsActive } =
    useContext(DashBoardContext);

  return (
    <div style={{ backgroundColor: "#f3f4f6", marginTop: 0 }}>
      <DashboardContainer>
        <FlexDiv>
          <HeaderText>My Listing </HeaderText>

          <AddBtn
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <MdOutlineAddBox size={24} />
            New Listing
          </AddBtn>
        </FlexDiv>
        <PropertyState>
          <PropertyBtn
            onClick={() => setIsActive("active")}
            className={
              isActive === "active" ? "isActiveColor" : "notActiveColor"
            }
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineCheckCircle size={20} />
            <span>Active </span>
          </PropertyBtn>
          <PropertyBtn
            className={
              isActive === "active" ? "isActiveColor" : "notActiveColor"
            }
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineCheckCircle size={20} />
            <span>Review </span>
          </PropertyBtn>
          <PropertyBtn
            className={
              isActive === "active" ? "isActiveColor" : "notActiveColor"
            }
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineCheckCircle size={20} />
            <span>Declined </span>
          </PropertyBtn>
          <PropertyBtn
            className={
              isActive === "active" ? "isActiveColor" : "notActiveColor"
            }
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineCheckCircle size={20} />
            <span>Draft </span>
          </PropertyBtn>
        </PropertyState>
      </DashboardContainer>
    </div>
  );
};

const DashboardContainer = styled.div`
  background-color: white;
  margin: ${(p) => p.theme.space[2]};
  border-radius: 1rem;
  padding: 3rem;
`;

const AddBtn = styled(GreenBtn)`
  width: 9rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PropertyState = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: ${(p) => p.theme.space[1]};
`;

const PropertyBtn = styled(motion.div)`
  width: ${(p) => p.theme.sizes[6]};

  display: flex;
  height: ${(p) => p.theme.sizes[4]};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 30px;
  cursor: pointer;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;
