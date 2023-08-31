import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  DashBoardNavContainer,
  MidText,
} from "../../../../../utils/modules/modules";
import { DashboardContainer } from "../../pages/Listing";

import "../../../../auth/auth.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import {
  FormContainer,
  NameFieldContainer,
  StyledField,
  StyledFieldForName,
  StyledLabel,
} from "../../../../auth/FormStyles";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  CustomBtn,
  FormParent,
  ModifiedMidText,
  ParentContainer,
} from "../../../../auth/StudentSignUp";
import { TextError } from "../../../../../utils/formModules/ErrorText";
import { SelectComponent } from "../../../../../utils/formModules/SelectComponent";
import { PhoneInputField } from "../../../../../utils/formModules/PhoneInputField";
import { SmallText } from "../../../../home/landingStyles";
import { CustomBtnNxt, CustomBtnPrev } from "./PropertyDetetails";
import { BiBed } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { MidText } from "../../utils/modules/modules";

const MySwal = withReactContent(Swal);

const initialValues = {
  personsInRoom: "",
  amount: "",
};

//get all values of the forms from this section

/* ========================= form Validation ======================== */

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  personsInRoom: Yup.string()
    .required("Required")
    .min(1, "must be at least 1 characters long"),

  amount: Yup.string().required("Required"),
});
export const RoomPricing = () => {
  const [formValues, setFormValues] = useState(null);

  const dropDownOptionsForSchool = [
    { key: "Select an Option", value: "" },
    { key: "One ", value: 1 },
    { key: "Two", value: 2 },
    { key: "Three", value: 3 },
    { key: "Four", value: 4 },
    { key: "Five", value: 5 },
    { key: "Six", value: 6 },
    { key: "Seven", value: 7 },
  ];

  /*=========xxx========= Dropdown Options  ============xxx=============*/

  //=========================radio options ==========================//
  const options = ["Private", "Shared"];
  const bedOptions = ["Full Bed", "Bunk Bed", "Twin Bed"];

  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    console.log("submitProps", submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();

    // this gives the user an alert message if from values are collected
    MySwal.fire({
      title: "Form Submitted Successfully!",
      text: "Click okay to return",
      icon: "success",
      confirmButtonColor: "#30D158",
    });
  };

  return (
    <DashboardContainer>
      <div
        style={{
          paddingLeft: "4rem",
          display: "flex",
          justifyContent: "flex-start",
          textAlign: "start",
          flexDirection: "column",
        }}
      >
        <MidText
          style={{
            textAlign: "start",
            fontWeight: "500",
            marginBottom: "0.5rem",
          }}
        >
          Property Details
        </MidText>

        <MidText
          style={{ textAlign: "start", marginBottom: "0", padding: "0" }}
        >
          Set the price of stay?
        </MidText>
        <SmallText
          style={{
            textAlign: "start",

            marginTop: "0",
            marginBottom: "2rem",
          }}
        >
          what is going on this time
        </SmallText>
      </div>

      <ParentContainer>
        <FormParent>
          <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
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
                      name="personsInRoom"
                      label="What tpe of room is this?"
                      options={dropDownOptionsForSchool}
                    />
                    <ErrorMessage name="personsInRoom" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="amount">
                      Price Student pays
                    </StyledLabel>{" "}
                    <br />
                    <StyledField
                      placeholder=" Amount in cedis"
                      type="number"
                      id="name"
                      name="amount"
                    />
                    <ErrorMessage name="amount" component={TextError} />
                  </FormContainer>

                  <FormContainer>
                    <StyledLabel>IS the room private or shared</StyledLabel>
                    <RadioStyles>
                      {options.map((option) => {
                        return (
                          <label htmlFor={option}>
                            <Field
                              id={option}
                              type="radio"
                              name="bathRoom"
                              value={option}
                            />
                            {` ${option} `}
                          </label>
                        );
                      })}
                      <ErrorMessage name="bathRoom" component={TextError} />
                    </RadioStyles>
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel>Select Bed Type</StyledLabel>
                    <RadioStyles>
                      {bedOptions.map((bedOption) => {
                        return (
                          <label htmlFor={bedOption} style={{}}>
                            <Field
                              id={bedOption}
                              type="radio"
                              name="bedType"
                              value={bedOption}
                            />

                            {`  ${bedOption} `}
                          </label>
                        );
                      })}
                      <ErrorMessage name="bathRoom" component={TextError} />
                    </RadioStyles>
                  </FormContainer>

                  {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}
                  {/* <button type="reset">Reset</button> */}
                  <div style={{ display: "flex", gap: "10%" }}>
                    <CustomBtnPrev type="button">Prev</CustomBtnPrev>

                    <CustomBtnNxt
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Next
                    </CustomBtnNxt>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </FormParent>

        <ModifiedMidText>
          Your off - campus accommodation starts here.
        </ModifiedMidText>
      </ParentContainer>
    </DashboardContainer>
  );
};
const RadioStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
