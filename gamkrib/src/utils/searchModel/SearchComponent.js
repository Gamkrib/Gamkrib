import React, { useState } from "react";

import "../../components/auth/auth.css";
import { Formik, Form } from "formik";

import styled from "styled-components";
import {
  FormContainer,
  StyledField,
} from "../../components/auth/FormStyles.js";
import { SelectComponent } from "../../utils/formModules/SelectComponent";

import PropertyImage from "../../asserts/siteLogos/Vector(4).png";

// import TextError from "./TextError";

const initialValues = {
  searchValue: "",

  roomType: "",
};

//get all values of the forms from this section
const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

export const SearchComponent = () => {
  const [formValues, setFormValues] = useState(null);

  /*================== Dropdown Options  =========================*/

  const dropDownOptionsForLevel = [
    { key: "Room Type", value: "" },
    { key: "1 in i", value: "1 in i" },
    { key: "2 in 1", value: "2 in 1" },
    { key: "3 in 1", value: "3 in 1" },
    { key: "4 in 1", value: "4 in 1" },
    { key: "5 in 1", value: "5 in 1" },
    { key: "6 in 1", value: "6 in 1" },
    { key: "Single", value: "Single" },
  ];
  /*=========xxx========= Dropdown Options  ============xxx=============*/

  return (
    <div>
      <FormParent>
        <Formik
          initialValues={formValues || initialValues}
          onSubmit={onSubmit}
          enableReinitialize
          validateOnChange={false}
          validateOnBlur={true}
        >
          {(formik) => {
            console.log("Formik props", formik);
            return (
              <Form>
                <FormLayout>
                  <FormContainer>
                    <ModifiedStyledField
                      type="text"
                      id="searchValue"
                      name="searchValue"
                      placeholder=" Search by city"
                    />
                  </FormContainer>
                  <SelectFormContainer>
                    <CustomSelectComponent
                      name="roomType"
                      options={dropDownOptionsForLevel}
                    />
                  </SelectFormContainer>

                  <CustomBtn
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Search
                  </CustomBtn>
                </FormLayout>
              </Form>
            );
          }}
        </Formik>
      </FormParent>
    </div>
  );
};

export const CustomBtn = styled.button.attrs()`
  height: 2.9rem;
  width: 8.75rem;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: "poppins";
  background-color: ${(p) => p.theme.colors.brand.primary};

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const FormParent = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: start;
`;

const ModifiedStyledField = styled(StyledField)`
  padding-left: 30px;
  width: 24.75rem;
  background: url("https://static.thenounproject.com/png/101791-200.png")
    no-repeat left 10px;
  background-size: 25px;
  border-radius: 10px;
`;

const FormLayout = styled.div`
  display: flex;
  gap: 2rem;
`;

const SelectFormContainer = styled(FormContainer)``;
const CustomSelectComponent = styled(SelectComponent)`
  height: 2.9rem;
  width: 9.75rem;
  border: solid 1.5px #b7b7b7;
  border-radius: 10px;

  font-family: "poppins";
  background-color: white;
  padding-left: 30px;
  background: url(${PropertyImage}) no-repeat left;
  background-size: 25px;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;
