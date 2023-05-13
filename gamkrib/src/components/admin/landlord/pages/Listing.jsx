import React, { useContext } from "react";
import {
  GreenBtn,
  HeaderText,
  ParentContainer,
} from "../../../../utils/modules/modules";
import styled from "styled-components";
import { DashBoardContext } from "../../../../context/selectedPropertyContext/DashBoardContext";
import { MdOutlineAddBox } from "react-icons/md";

export const Listing = () => {
  const { selectedList, setSelectedList } = useContext(DashBoardContext);

  console.log(selectedList);
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
