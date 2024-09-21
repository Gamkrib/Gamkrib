import React, { useState } from "react";
import { MidText } from "../../../../../utils/modules/modules";
import { DashboardContainer } from "../../pages/Listing";
import "../../../../auth/auth.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import {
  FormContainer,
  StyledField,
  StyledLabel,
  StyledTextArea,
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

import { SmallText } from "../../../../home/landingStyles";
import { useContext } from "react";
import { PostingPropsContextProvider } from "../../../../../context/PostingPropertyContext";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

const initialValues = {
  number_of_beds: "",
  number_of_rooms: "",
  price: "",
  location: "",
  gender: "",
  describption: "",
};

//get all values of the forms from this section

/* ========================= form Validation ======================== */

const validationSchema = Yup.object({
  number_of_beds: Yup.number().required("Required"),
  number_of_rooms: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
  location: Yup.string().required("Required"),
});

export const PropertyDetails = () => {
  const [formValues, setFormValues] = useState(null);
  const { setValues, values } = useContext(PostingPropsContextProvider);
  const navigate = useNavigate();
  /*================== Dropdown Options  =========================*/

  const dropDownOptionsForSchool = [
    { key: "Select an Option", value: "" },
    { key: "Female", value: "female" },
    { key: "Male", value: "male" },
  ];

  /*=========xxx========= Dropdown Options  ============xxx=============*/

  //======================saving the values to context ===========================//
  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    const s = localStorage.getItem("gamkribUserData");
    console.log(s);
    const userData = JSON.parse(s);
    const ps = {
      posted_by: userData.username,
      ...values,
    };

    let sValues = JSON.stringify(ps);
    localStorage.setItem("propDetails", sValues);
    setValues(values);
    navigate("/dashboard/listing/preview");
    // this gives the user an alert message if from values are collected
    // MySwal.fire({
    //   title: "Form Submitted Successfully!",
    //   text: "Click okay to return",
    //   icon: "success",
    //   confirmButtonColor: "#30D158",
    // });
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
              return (
                <Form>
                  <FormContainer>
                    <SelectComponent
                      name="gender"
                      label="Gender"
                      options={dropDownOptionsForSchool}
                    />
                    <ErrorMessage name="gender" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="location">
                      Please state the location of the property
                    </StyledLabel>{" "}
                    <br />
                    <StyledField type="text" id="location" name="location" />
                    <ErrorMessage name="location" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="price">Price in GHc</StyledLabel>{" "}
                    <br />
                    <StyledField type="number" id="price" name="price" />
                    <ErrorMessage name="price" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="number_of_beds">
                      Number of beds
                    </StyledLabel>
                    <br />
                    <StyledField
                      type="number"
                      id="number_of_beds"
                      name="number_of_beds"
                    />
                    <ErrorMessage name="number_of_beds" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="number_of_rooms">
                      Number of Rooms
                    </StyledLabel>
                    <br />
                    <StyledField
                      type="number"
                      id="number_of_rooms"
                      name="number_of_rooms"
                    />
                    <ErrorMessage
                      name="number_of_rooms"
                      component={TextError}
                    />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="describption">
                      Description{" "}
                      <span style={{ fontSize: "13px" }}>
                        (Some catchy words to hook student in)
                      </span>
                    </StyledLabel>{" "}
                    <br />
                    <StyledTextArea
                      type="textArea"
                      id="describption"
                      name="describption"
                    />
                    <ErrorMessage name="describption" component={TextError} />
                  </FormContainer>
                  {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}
                  {/* <button type="reset">Reset</button> */}
                  <div style={{ display: "flex", gap: "10%" }}>
                    <CustomBtnPrev type="button">Prev</CustomBtnPrev>
                    <CustomBtnNxt
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

export const CustomBtnNxt = styled(CustomBtn)`
  width: 60%;
`;
export const CustomBtnPrev = styled(CustomBtn)`
  width: 30%;
  background-color: #30cf72;
`;
