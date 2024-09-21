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
//import TextError from "./TextError";

import stuSignUpImg from "../../asserts/backgroundImages/stSU.webp";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { MidText } from "../../utils/modules/modules";
import { Link, useNavigate } from "react-router-dom";
import { plainAPi } from "./axios/axios";


const MySwal = withReactContent(Swal);

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  school: "",
  gender: "",
  level: "",
  phone_number: "",
  password: "",
  password2: "",
  is_landlord: false,
  location: 'null'
};

//get all values of the forms from this section

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
  password2: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Password mismatched"),
  school: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  level: Yup.string().required("Required"),
  phone_number: Yup.string()
    .required("required")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(12, "enter a valid phone number please")
    .max(15, "too long"),
});

/* ===================xxx============== form Validation ===================xxx=============== */

export const StudentSignUp = () => {
  const [formValues, setFormValues] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate();

  const onSubmit = (values, submitProps) => {

    const base = async (route) => {

      const subValues = {
        username: values.firstName + values.lastName,
        ...values
      }
      console.log(subValues)
      try {
        setIsLoading(true)
        const { data: { data } } = await plainAPi.post('/gamkrib_createuser', subValues)
        const s = JSON.stringify(data)
        localStorage.setItem('gamkribUserData', s)
        localStorage.setItem('gamkribToken', data?.token)
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
                  <StyledLabel htmlFor="phone_number">Phone</StyledLabel> <br />
                  <PhoneInputField
                    label="Phone Number"
                    name="phone_number"
                    type="tel"
                    placeholder="Type your phone number here"
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
                  <StyledLabel htmlFor="password">Password</StyledLabel>
                  <br />
                  <StyledField
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Create a new password"
                  />
                  <ErrorMessage name="password" component={TextError} />
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
                //  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Create my Account
                </CustomBtn>
                <div style={{ marginTop: "10px" }}>A landLord? Click
                  <Link to={"/landLordSignup"}>
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

  @media (max-width: 968px) {
    display: none;
  }
`;

export const ParentContainer = styled.div`
  display: flex;
  @media (max-width: 968px) {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
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
