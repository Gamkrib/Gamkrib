import React, { useState } from "react";
import "./auth.css";
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

import stuSignUpImg from "../../asserts/backgroundImages/stSU.webp";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MidText } from "../../utils/modules/modules";

const MySwal = withReactContent(Swal);

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  school: "",
  gender: "",
  level: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
};

//get all values of the forms from this section
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

/* ========================= form Validation ======================== */

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .min(3, "must be at least 3 characters long"),
  lastName: Yup.string()
    .required("Required")
    .min(3, "must be at least 3 characters long"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, " Password must be at least 6 characters long"),
  passwordConfirmation: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password mismatched"),
  school: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  level: Yup.string().required("Required"),
  phone: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(12, "enter a valid phone number please")
    .max(15, "too long"),
});

/* ===================xxx============== form Validation ===================xxx=============== */

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
  /*=========xxx========= Dropdown Options  ============xxx=============*/

  return (
    <ParentContainer>
      <FormParent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            textAlign: "start",

            width: "48%",
          }}
        >
          <MidText>Create an account as a student</MidText>
        </div>

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
                    <StyledFieldForName
                      type="text"
                      id="name"
                      name="firstName"
                    />
                    <ErrorMessage name="firstName" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="lastName">Last Name</StyledLabel>{" "}
                    <br />
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
                  <ErrorMessage name="school" component={TextError} />
                </FormContainer>
                <FormContainer>
                  <SelectComponent
                    name="gender"
                    label="Gender"
                    options={dropDownOptionsForGender}
                  />
                  <ErrorMessage name="gender" component={TextError} />
                </FormContainer>
                <FormContainer>
                  <SelectComponent
                    name="level"
                    label="Level"
                    options={dropDownOptionsForLevel}
                  />
                  <ErrorMessage name="level" component={TextError} />
                </FormContainer>
                <FormContainer>
                  <StyledLabel htmlFor="phone">Phone</StyledLabel> <br />
                  <PhoneInputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="Write your phone number here"
                  />
                  <ErrorMessage name="phone" component={TextError} />
                </FormContainer>

                <FormContainer>
                  <StyledLabel htmlFor="email">Email</StyledLabel>
                  <br />
                  <StyledField type="email" id="email" name="email" />
                  <ErrorMessage name="email" component={TextError} />
                </FormContainer>

                <FormContainer>
                  <StyledLabel htmlFor="password">Password</StyledLabel>
                  <br />
                  <StyledField
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a new password"
                  />
                  <ErrorMessage name="password" component={TextError} />
                </FormContainer>
                <FormContainer>
                  <StyledLabel htmlFor="passwordConfirmation">
                    Confirm Password
                  </StyledLabel>
                  <br />
                  <StyledField
                    type="text"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component={TextError}
                  />
                </FormContainer>

                {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}

                {/* <button type="reset">Reset</button> */}
                <CustomBtn
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Create my Account
                </CustomBtn>
              </Form>
            );
          }}
        </Formik>
      </FormParent>
      <ImageContainer>
        <TextContainer>
          <ModifiedMidText>
            Your off - campus accommodation starts here.
          </ModifiedMidText>
        </TextContainer>
      </ImageContainer>
    </ParentContainer>
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

const ImageContainer = styled.div`
  /* background-image: url(${stuSignUpImg}); */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${stuSignUpImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ParentContainer = styled.div`
  display: flex;
`;

export const ModifiedMidText = styled(MidText)`
  color: white;
  font-size: 4rem;
  font-weight: 500;
  text-align: start;
`;

export const TextContainer = styled.div`
  height: 30rem;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
