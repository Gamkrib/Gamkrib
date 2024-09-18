import React, { useState } from "react";
import "./auth.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { FormContainer, StyledField, StyledLabel } from "./FormStyles";
import { SelectComponent } from "../../utils/formModules/SelectComponent";
import { PhoneInputField } from "../../utils/formModules/PhoneInputField";
import { TextError } from "../../utils/formModules/ErrorText";
// import TextError from "./TextError";

import loginImg from "../../asserts/backgroundImages/studentSignUp.webp";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DescriptionText, MidText } from "../../utils/modules/modules";
import {
  CustomBtn,
  FormParent,
  ModifiedMidText,
  ParentContainer,
  TextContainer,
} from "./StudentSignUp";
import { BigTextWithoutMargin } from "../home/landingStyles";
import { LogoContainer } from "../navbar/navbarStyles";
import { Logo } from "../../utils/modules/Logo";

const MySwal = withReactContent(Swal);

const initialValues = {
  email: "",

  password: "",
};

//get all values of the forms from this section
const onSubmit = (values, submitProps) => {
  console.log("Form data from landLord ", values);
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

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Login failed, check your email or password"),
});

export const LoginPage = () => {
  const [formValues, setFormValues] = useState(null);
  return (
    <>
      <ParentContainer>
        <FormParent>
          <LogoContainer style={{ marginBottom: 60 }}>
            <Logo width="80" />
          </LogoContainer>
          <div>
            <BigTextWithoutMargin>Log In </BigTextWithoutMargin>
          </div>
          <DescriptionText>Welcome Back</DescriptionText>

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

                  {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}

                  {/* <button type="reset">Reset</button> */}
                  <CustomBtn
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                  >
                    Log In
                  </CustomBtn>
                </Form>
              );
            }}
          </Formik>
        </FormParent>
        <ImageContainer>
          {/* <TextContainer>
            <ModifiedMidText>
              Add your property to start earning cash.
            </ModifiedMidText>
          </TextContainer> */}
        </ImageContainer>
      </ParentContainer>
    </>
  );
};

const ImageContainer = styled.div`
  background: url(${loginImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`;
