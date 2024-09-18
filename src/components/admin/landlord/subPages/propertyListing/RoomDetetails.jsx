import React, { useContext, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { PostingPropsContextProvider } from "../../../../../context/PostingPropertyContext";
// import { MidText } from "../../utils/modules/modules";

const MySwal = withReactContent(Swal);

const initialValues = {
  roomType: "",
  room: "",
  roomSize: "",
  password: "",
  bathRoom: "",
  bedType: "",
};

/* ========================= form Validation ======================== */

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  roomType: Yup.string()
    .required("Required")
    .min(3, "must be at least 3 characters long"),

  roomSize: Yup.string().required("Required"),
});
export const RoomDetetails = () => {
  const [formValues, setFormValues] = useState(null);
  const { setValues, value } = useContext(PostingPropsContextProvider);
  /*================== Dropdown Options  =========================*/
  const navigate = useNavigate();
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

  //get all values of the forms from this section
  const onSubmit = (values, submitProps) => {
    console.log("Form data", values);
    console.log("submitProps", submitProps);
    setValues({ ...value }, values);
    navigate("/dashboard/listing/roomPricing");
    console.log(values);
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

  //=========================radio options ==========================//
  const options = ["Private", "Shared"];
  const bedOptions = ["Full Bed", "Bunk Bed", "Twin Bed"];

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
                      name="roomType"
                      label="What tpe of room is this?"
                      options={dropDownOptionsForSchool}
                    />
                    <ErrorMessage name="roomType" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="firstName">
                      How many rooms fo this type do you have?
                    </StyledLabel>{" "}
                    <br />
                    <StyledField type="number" id="name" name="room" />
                    <ErrorMessage name="room" component={TextError} />
                  </FormContainer>
                  <FormContainer>
                    <StyledLabel htmlFor="roomSize">
                      How big is this room ? (Optional)
                    </StyledLabel>{" "}
                    <br />
                    <StyledField type="text" id="city" name="roomSize" />
                    <ErrorMessage name="roomSize" component={TextError} />
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

                    <Link
                      to={"/dashboard/listing/roomPricing"}
                      style={{ width: 260 }}
                    >
                      <CustomBtnNxt
                        type="submit"
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

const RadioStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
