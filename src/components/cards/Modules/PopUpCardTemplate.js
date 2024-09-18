import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  SelectedHostelContext,
  SelectedHostelContextProvider,
} from "../../../context/selectedPropertyContext/SelectedPropertyContextProvider";

export const PopUpCardTemp = (props) => {
  const [showElement, setShowElement] = useState(true);
  const { setFiler } = useContext(SelectedHostelContext);
  const handleButtonClick = (event) => {
    if (event.target.classList.contains("close")) {
      // Show the alert
      setFiler(false);
      setShowElement(false);
    } else {
      // Clicked element is a child div, so do nothing
      event.stopPropagation();
    }
  };

  return (
    showElement && (
      // <Parent>
      <PopUpContainer className="close" onClick={handleButtonClick}>
        <PopUPCard>{props.children}</PopUPCard>
      </PopUpContainer>
      // </Parent>
    )
  );
};

const PopUpContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 20;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

const PopUPCard = styled.div`
  width: 60rem;
  height: 46rem;
  border-radius: 7%;
  background-color: white;
  padding: 3rem 4rem;
`;

const Parent = styled.div`
  display: float;
  justify-content: center;
  align-items: center;
`;
