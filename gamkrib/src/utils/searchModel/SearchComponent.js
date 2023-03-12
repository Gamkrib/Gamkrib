import React, { useState } from "react";

import "../../components/auth/auth.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {
  FormContainer,
  StyledField,
} from "../../components/auth/FormStyles.js";
import { SelectComponent } from "../../utils/formModules/SelectComponent";

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
    { key: "Select Level", value: "" },
    { key: "100", value: "100" },
    { key: "200", value: "200" },
    { key: "300", value: "300" },
    { key: "400", value: "400" },
    { key: "500", value: "500" },
    { key: "600", value: "600" },
    { key: "700", value: "700" },
  ];
  /*=========xxx========= Dropdown Options  ============xxx=============*/

  return (
    <div>
      <FormParent>
        <Formik
          initialValues={formValues || initialValues}
          //   validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
          validateOnChange={false}
          validateOnBlur={true}
          // validateOnMount
        >
          {(formik) => {
            console.log("Formik props", formik);
            return (
              <Form>
                <FormContainer>
                  <SelectComponent
                    name="roomType"
                    options={dropDownOptionsForLevel}
                  />
                </FormContainer>

                <FormContainer>
                  <br />
                  <StyledField
                    type="text"
                    id="searchValue"
                    name="searchValue"
                  />
                </FormContainer>

                <CustomBtn
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Search
                </CustomBtn>
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
  width: 28.75rem;
  border: none;
  border-radius: 5px;
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
  flex-direction: column;
  text-align: start;
`;
