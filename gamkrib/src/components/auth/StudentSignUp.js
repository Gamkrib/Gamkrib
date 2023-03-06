import React, { useState } from "react";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import {
  FormContainer,
  NameFieldContainer,
  StyledField,
  StyledFieldForName,
  StyledLabel,
} from "./FormStyles";
import { SelectComponent } from "../../utils/formModules/SelectComponent";
import { PhoneInputField } from "../../utils/formModules/PhoneInputField";
import { TextError } from "../../utils/formModules/ErrorText";
// import TextError from "./TextError";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  school: "",
  gender: "",
  level: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phone: "",
  phNumbers: [""],
};

// const savedValues = {
//   firstName: "Vishwas",
//   email: "v@example.com",
//   channel: "codevolution",
//   comments: "Welcome to Formik",
//   address: "221B Baker Street",
//   social: {
//     facebook: "",
//     twitter: "",
//   },
//   phoneNumbers: ["", ""],
//   phNumbers: [""],
// };

const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .min(3, "must be at least 3 characters long"),
  lastName: Yup.string()
    .required("Required")
    .min(3, "must be at least 3 characters long"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  school: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  level: Yup.string().required("Required"),
  phone: Yup.number()
    .required("Required")
    .min(9, "Enter a valid number please"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

export const StudentSignUp = () => {
  const [formValues, setFormValues] = useState(null);

  /*================== Dropdown Options  =========================*/

  const dropDownOptionsForSchool = [
    { key: "Select an Option", value: "" },
    { key: "University of GHana, Legon", value: "University of GHana, Legon" },
    {
      key: "University of Professional Studies, Accra",
      value: "University of Professional Studies, Accra",
    },
    { key: "Wisconsin university", value: "Wisconsin university" },
    { key: "Lancaster university", value: "Lancaster university" },
    {
      key: "Knustford University College",
      value: "Knustford University College",
    },
    { key: "Radford University College", value: "Radford University College" },
    { key: "Ghana School of Langiages", value: "Ghana School of Langiages" },
  ];

  const dropDownOptionsForGender = [
    { key: "Select your Gender", value: "" },
    { key: "Male", value: "Male" },
    { key: "Female", value: "Female" },
  ];
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

  return (
    <div>
      <div></div>
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
              <NameFieldContainer>
                <FormContainer>
                  <StyledLabel htmlFor="firstName">First Name</StyledLabel>{" "}
                  <br />
                  <StyledFieldForName type="text" id="name" name="firstName" />
                  <ErrorMessage name="firstName" component={TextError} />
                </FormContainer>
                <FormContainer>
                  <StyledLabel htmlFor="lastName">Last Name</StyledLabel> <br />
                  <StyledFieldForName
                    type="text"
                    id="lastName"
                    name="lastName"
                  />
                  <ErrorMessage name="lastName" component={TextError} />
                </FormContainer>
              </NameFieldContainer>
              <FormContainer>
                <SelectComponent
                  name="school"
                  label="School / Institution"
                  options={dropDownOptionsForSchool}
                />
              </FormContainer>
              <FormContainer>
                <SelectComponent
                  name="gender"
                  label="Gender"
                  options={dropDownOptionsForGender}
                />
              </FormContainer>
              <FormContainer>
                <SelectComponent
                  name="level"
                  label="Level"
                  options={dropDownOptionsForLevel}
                />
              </FormContainer>
              {/* <div>
                <StyledLabel htmlFor="phoneNumber">Phone</StyledLabel>
                <br />
                <StyledField
                  type="tel"
                  as="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </div> */}
              <PhoneInputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Write your phone number here"
              />
              <FormContainer>
                <StyledLabel htmlFor="email">Email</StyledLabel>
                <br />
                <StyledField type="email" id="email" name="email" />
                {/* <ErrorMessage name="email">
                  {(error) => <div className="error">{error}</div>}
                </ErrorMessage> */}
              </FormContainer>

              <FormContainer>
                <StyledLabel htmlFor="channel">Channel</StyledLabel>
                <br />
                <StyledField
                  type="text"
                  id="channel"
                  name="channel"
                  placeholder="YouTube channel name"
                />
                {/* <ErrorMessage name="channel" /> */}
              </FormContainer>

              <FormContainer>
                <StyledLabel htmlFor="facebook">Facebook profile</StyledLabel>
                <br />
                <StyledField type="text" id="facebook" name="social.facebook" />
              </FormContainer>

              <FormContainer>
                <StyledLabel htmlFor="twitter">Twitter profile</StyledLabel>
                <br />
                <StyledField type="text" id="twitter" name="social.twitter" />
              </FormContainer>

              <FormContainer>
                <StyledLabel htmlFor="secondaryPh">
                  Secondary phone number
                </StyledLabel>
                <br />
                <StyledField
                  type="text"
                  id="secondaryPh"
                  name="phoneNumbers[1]"
                />
              </FormContainer>

              {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}
              <button type="reset">Reset</button>
              <button
                type="submit"
                disabled={!formik.isValid || formik.isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
