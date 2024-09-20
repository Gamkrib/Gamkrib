import React, { useState } from "react";
import "./auth.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { FormContainer, StyledField, StyledLabel } from "./FormStyles";
import { TextError } from "../../utils/formModules/ErrorText";
// import TextError from "./TextError";

import loginImg from "../../asserts/backgroundImages/studentSignUp.webp";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { DescriptionText } from "../../utils/modules/modules";
import {
  CustomBtn,
  FormParent, ParentContainer
} from "./StudentSignUp";
import { BigTextWithoutMargin } from "../home/landingStyles";
import { LogoContainer } from "../navbar/navbarStyles";
import { Logo } from "../../utils/modules/Logo";
import { plainAPi } from "./axios/axios";
import { Loader } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const initialValues = {
  username: "",

  password: "",
};

//get all values of the forms from this section
const onSubmit = async (values, submitProps) => {
  console.log("Form data from landLord ", values);
  console.log("submitProps", submitProps);

  try {
    const { data: { data } } = await plainAPi.post('/gamkrib_signin', values)
    console.log(data)
    localStorage.setItem('gamkribToken', data?.token)
    submitProps.setSubmitting(false);
    submitProps.resetForm();
    MySwal.fire({
      title: "Form Submitted Successfully!",
      text: "Click okay to return",
      icon: "success",
      confirmButtonColor: "#30D158",
    });
  } catch (error) {

  }


  // this gives the user an alert message if from values are collected

};

/* ========================= form Validation ======================== */

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Login failed, check your username or password"),
});

export const LoginPage = () => {
  const [formValues, setFormValues] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  ///form submission 
  const onSubmit = async (values, submitProps) => {
    console.log("Form data from landLord ", values);
    console.log("submitProps", submitProps);

    try {
      setIsLoading(true)
      const { data: { data } } = await plainAPi.post('/gamkrib_signin', values)

      // save userData for later use 
      const s = JSON.stringify(data)
      localStorage.setItem('gamkribUserData', s)
      localStorage.setItem('gamkribToken', data?.token)
      submitProps.setSubmitting(false);
      submitProps.resetForm();
      setIsLoading(false)
      MySwal.fire({
        title: "Form Submitted Successfully!",
        text: "Click okay to return",
        icon: "success",
        confirmButtonColor: "#30D158",
      });
      navigate("/dashboard/student");
    } catch (error) {

    }


    // this gives the user an alert message if from values are collected

  };

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
              return (
                <Form>
                  <FormContainer>
                    <StyledLabel htmlFor="username">User Name</StyledLabel>
                    <br />
                    <StyledField type="username" id="username" name="username" />
                    <ErrorMessage name="username" component={TextError} />
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

                  <CustomBtn
                    type="submit"
                    disabled={!formik.isValid || formik.isSubmitting}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                  >
                    {isLoading ? <Loader /> : "Log In"}
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
