import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  DashBoardNavContainer,
  MidText,
} from "../../../../../utils/modules/modules";
import { DashboardContainer } from "../../pages/Listing";

import "../../../../auth/auth.css";
import { Formik, Form, ErrorMessage } from "formik";
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
import axios from "axios";
import { apiUrl, csrfToken } from "../../../../apis/APIs";
import { Link } from "react-router-dom";
// import { MidText } from "../../utils/modules/modules";

const MySwal = withReactContent(Swal);

const initialValues = {
  propertyName: "",
  city: "",
  houseNumber: "",
  region: "",
};

//get all values of the forms from this section
const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  const base = async (route) => {
    try {
      const res = await axios.post(`${apiUrl}${route}/`, values, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
      });
      MySwal.fire({
        title: "Form Submitted Successfully!",
        res,
        text: "Click okay to return",
        icon: "success",
        confirmButtonColor: "#30D158",
      });

      submitProps.setSubmitting(false);
      submitProps.resetForm();
    } catch (error) {
      MySwal.fire({
        title: "Ops, Field to Submit Forms!",
        text: "Click okay to return",
        icon: "error",
        confirmButtonColor: "#30D158",
      });
      return console.log(error);
    } finally {
    }
  };
  base("users/register");
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

/* ========================= form Validation ======================== */

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  propertyName: Yup.string()
    .required("Required")
    .min(3, "must be at least 3 characters long"),
  city: Yup.string()
    .required("Required")
    .min(3, "must be at least 3 characters long"),
  houseNumber: Yup.string().required("Required"),
  region: Yup.string().required("Required"),
});

export const PropertyDetails = () => {
  const [formValues, setFormValues] = useState(null);

  /*================== Dropdown Options  =========================*/

  const dropDownOptionsForSchool = [
    { key: "Select an Option", value: "" },
    { key: "Greater Accra Region", value: "GreaterAccraRegion" },
    { key: "Ashanti Region", value: "AshantiRegion" },
    { key: "Eastern Region", value: "EasternRegion" },
    { key: "Oti Region", value: "OtiRegion" },
    { key: "Bono East Region", value: "BonoEastRegion" },
    { key: "Ahafo Region", value: "AhafoRegion" },
    { key: "Bono Region", value: "BonoRegion" },
    { key: "North East Region", value: "NorthEastRegion" },
    { key: "Savannah Region", value: "SavannahRegion" },
    { key: "Western North Region", value: "WesternNorthRegion" },
    { key: "Western Region", value: "WesternRegion" },
    { key: "Volta Region", value: "VoltaRegion" },
    { key: "Central Region", value: "CentralRegion" },
    { key: "Northern Region", value: "NorthernRegion" },
    { key: "Upper East Region", value: "UpperEastRegion" },
    { key: "Upper West Region", value: "UpperWestRegion" },
  ];

  /*=========xxx========= Dropdown Options  ============xxx=============*/

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
          Where is the property you're listing?
        </MidText>
        <SmallText
          style={{
            textAlign: "start",

            marginTop: "0",
            marginBottom: "2rem",
          }}
        >
          To get started, select the type of property you want to list on
          Booking.com
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
                      name="region"
                      label="Region"
                      options={dropDownOptionsForSchool}
                    />
                    <ErrorMessage name="region" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="firstName">
                      Street Name and House number
                    </StyledLabel>{" "}
                    <br />
                    <StyledField type="text" id="name" name="houseNumber" />
                    <ErrorMessage name="houseNumber" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="city">City</StyledLabel> <br />
                    <StyledField type="text" id="city" name="city" />
                    <ErrorMessage name="city" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="email">Property Name</StyledLabel>
                    <br />
                    <StyledField type="text" id="email" name="propertyName" />
                    <ErrorMessage name="propertyName" component={TextError} />
                  </FormContainer>
                  {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}
                  {/* <button type="reset">Reset</button> */}
                  <div style={{ display: "flex", gap: "10%" }}>
                    <CustomBtnPrev type="button">Prev</CustomBtnPrev>
                    <Link
                      to={"/dashboard/listing/preview"}
                      style={{ width: 220 }}
                    >
                      <CustomBtnNxt
                        type="button"
                        disabled={!formik.isValid || formik.isSubmitting}
                      >
                        Next
                      </CustomBtnNxt>
                    </Link>
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

export const CustomBtnNxt = styled(CustomBtn)`
  width: 60%;
`;
export const CustomBtnPrev = styled(CustomBtn)`
  width: 30%;
  background-color: #30cf72;
`;
