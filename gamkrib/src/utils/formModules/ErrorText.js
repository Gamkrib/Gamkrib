import React from "react";
import styled from "styled-components";

export const TextError = (props) => {

  return <ErrorContainer className="error">{props.children}</ErrorContainer>;
};

const ErrorContainer = styled.div`
  font-size: 13px;
  color: ${(p) => p.theme.colors.ui.error};
`;
