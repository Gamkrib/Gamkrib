import React, { useContext } from "react";
import {
  GreenBtn,
  HeaderText,
  ParentContainer,
} from "../../../../utils/modules/modules";
import styled from "styled-components";
import { DashBoardContext } from "../../../../context/selectedPropertyContext/DashBoardContext";
import { MdOutlineAddBox, MdOutlineFreeCancellation } from "react-icons/md";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import { motion } from "framer-motion";
import { colors } from "../../../../theme/colors";

import "./minorStyles.css";
import { Card } from "../../../../customComponetns/Card";
import { Link } from "react-router-dom";

export const Listing = () => {
  const { selectedList, isActive, setSelectedList, setIsActive } =
    useContext(DashBoardContext);

  /*===================Api to update various state of the app =====================*/

  return (
    <div style={{ backgroundColor: "#f3f4f6", marginTop: 0 }}>
      <DashboardContainer>
        <FlexDiv>
          <HeaderText>My Listing </HeaderText>
          <Link to="propertyDetails">
            <AddBtn
              whileTap={{ scale: 0.9 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              <MdOutlineAddBox size={24} />
              New Listing
            </AddBtn>{" "}
          </Link>
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
            onClick={() => setIsActive("Review")}
            className={
              isActive === "Review" ? "isActiveColor1" : "notActiveColor"
            }
            whileTap={{ scale: 0.9 }}
          >
            <BsClipboardCheck size={20} />
            <span>Reviewing </span>
          </PropertyBtn>
          <PropertyBtn
            onClick={() => setIsActive("Declined")}
            className={
              isActive === "Declined" ? "isActiveColor2" : "notActiveColor"
            }
            whileTap={{ scale: 0.9 }}
          >
            <MdOutlineFreeCancellation size={20} />
            <span>Declined </span>
          </PropertyBtn>
          <PropertyBtn
            onClick={() => setIsActive("Draft")}
            className={
              isActive === "Draft" ? "isActiveColor3" : "notActiveColor"
            }
            whileTap={{ scale: 0.9 }}
          >
            <FaRegCopy size={20} />
            <span>Draft </span>
          </PropertyBtn>
        </PropertyState>

        <Properties>
          <Card name="First Property" />
          <Card name="First Property" />
        </Properties>
      </DashboardContainer>
    </div>
  );
};

export const DashboardContainer = styled.div`
  background-color: white;
  margin: ${(p) => p.theme.space[2]};
  border-radius: 1rem;
  padding: 3rem;
  height: 84vh;
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
  margin-bottom: ${(p) => p.theme.space[3]};
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

const Properties = styled.div`
  display: flex;
  gap: 2rem;
`;
