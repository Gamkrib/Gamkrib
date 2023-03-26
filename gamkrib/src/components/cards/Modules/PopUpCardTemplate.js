import React, { useState } from "react";
import styled from "styled-components";
import { SelectedHostelContextProvider } from "../../../context/selectedPropertyContext/SelectedPropertyContextProvider";

export const PopUpCardTemp = (props) => {
  const [showElement, setShowElement] = useState(true);

  const handleButtonClick = () => {
    setShowElement(false);
  };

  return (
    showElement && (
      <PopUpContainer>
        <PopUPCard>{props.children}</PopUPCard>
        <button onClick={handleButtonClick}> remove TRial </button>
      </PopUpContainer>
    )
  );
};

const PopUpContainer = styled.div`
  background-color: rgba(74, 73, 73, 0.73);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUPCard = styled.div`
  width: 60rem;
  height: 46rem;
  border-radius: 7%;
  background-color: white;
  padding: 3rem 4rem;
`;
