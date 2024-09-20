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

import lanSignUpImg from "../../asserts/backgroundImages/landLord.webp";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MidText } from "../../utils/modules/modules";
import {
  CustomBtn,
  FormParent,
  ModifiedMidText,
  ParentContainer,
  TextContainer,
} from "./StudentSignUp";
import { apiUrl, csrfToken } from "../apis/APIs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { plainAPi } from "./axios/axios";

const MySwal = withReactContent(Swal);

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  school: "non",
  gender: "any",
  ghanaCardNumber: "1243",
  level: "300",
  phone_number: "",
  password1: "",
  password2: "",
  is_landlord: true,
  location: 'null'
};

//get all values of the forms from this section


/* ========================= form Validation ======================== */

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

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
  ghanaCardNumber: Yup.string().required("Required"),

  phone: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(12, "enter a valid phone number please")
    .max(15, "too long"),
});

export const LandLordSignUp = () => {
  const [formValues, setFormValues] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
    ;
  const onSubmit = (values, submitProps) => {

    const base = async (route) => {

      const subValues = {
        username: values.firstName + values.lastName,
        is_landlord: true,
        ...values
      }
      console.log(subValues)
      try {
        setIsLoading(true)
        const { data } = await plainAPi.post('/gamkrib_createuser', subValues)
        console.log(data)
        MySwal.fire({
          title: "Form Submitted Successfully!",
          text: 'Account created successfully',
          icon: "success",
          confirmButtonColor: "#30D158",
        });

        navigate("/");
        setIsLoading(false)
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      } catch (error) {
        setIsLoading(false)
        MySwal.fire({
          title: "Ops, Field to Submit Forms!",
          text: "Click okay to return",
          icon: "error",
          confirmButtonColor: "#30D158",
        });
        return console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    base('users/register')
    submitProps.setSubmitting(false);
    submitProps.resetForm();

    // this gives the user an alert message if from values are collected

  };
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
          <MidText>Create an account to add a property</MidText>
        </div>

        <Formik
          initialValues={formValues || initialValues}
          // validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
          validateOnChange={false}
          validateOnBlur={true}
        // validateOnMount
        >
          {(formik) => {

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
                  <StyledLabel htmlFor="lastName">
                    Ghana Card Number
                  </StyledLabel>{" "}
                  <br />
                  <StyledField
                    type="text"
                    id="ghanaCardNumber"
                    name="ghanaCardNumber"
                    placeholder="GHA-000-000-00"
                  />
                  <ErrorMessage name="ghanaCardNumber" component={TextError} />
                </FormContainer>

                <FormContainer>
                  <StyledLabel htmlFor="phone_number">Phone</StyledLabel> <br />
                  <PhoneInputField
                    label="Phone Number"
                    name="phone_number"
                    type="tel"
                    placeholder="Write your phone number here"
                  />
                  <ErrorMessage name="phone_number" component={TextError} />
                </FormContainer>
                <FormContainer>
                  <StyledLabel htmlFor="email">Email</StyledLabel>
                  <br />
                  <StyledField type="email" id="email" name="email" />
                  <ErrorMessage name="email" component={TextError} />
                </FormContainer>

                <FormContainer>
                  <StyledLabel htmlFor="password1">Password</StyledLabel>
                  <br />
                  <StyledField
                    type="password"
                    id="password"
                    name="password1"
                    placeholder="Create a new password"
                  />
                  <ErrorMessage name="password1" component={TextError} />
                </FormContainer>
                <FormContainer>
                  <StyledLabel htmlFor="password2">
                    Confirm Password
                  </StyledLabel>
                  <br />
                  <StyledField
                    type="text"
                    id="password2"
                    name="password2"
                    placeholder="Confirm your password"
                  />
                  <ErrorMessage
                    name="password2"
                    component={TextError}
                  />
                </FormContainer>

                {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}

                {/* <button type="reset">Reset</button> */}
                <CustomBtn
                  type="submit"
                // disabled={!formik.isValid || formik.isSubmitting}
                >
                  Create my Account
                </CustomBtn>
                <div style={{ marginTop: "10px" }}>A Student? Click
                  <Link to={"/studentSignup"}>
                    {" Here "}
                  </Link>
                  to signup </div>
              </Form>
            );
          }}
        </Formik>
      </FormParent>
      <ImageContainer>
        <TextContainer>
          <ModifiedMidText>
            Add your property to start earning cash.
          </ModifiedMidText>
        </TextContainer>
      </ImageContainer>
    </ParentContainer>
  );
};

const ImageContainer = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${lanSignUpImg});
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
