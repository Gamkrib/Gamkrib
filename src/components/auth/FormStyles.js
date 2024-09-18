import { Field } from "formik";
import styled from "styled-components";

export const StyledField = styled(Field)`
  height: 2.9rem;
  width: 28.75rem;
  border: solid 1.5px #b7b7b7;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const StyledFieldForName = styled(StyledField)`
  width: 13.5rem;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const StyledLabel = styled.label`
  font-family: "poppins";
  padding-bottom: 5px;
`;

export const NameFieldContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

export const FormContainer = styled.div`
  margin-bottom: 20px;
`;
