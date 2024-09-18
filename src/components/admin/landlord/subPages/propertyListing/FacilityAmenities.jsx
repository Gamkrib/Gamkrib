import React, { useState } from "react";
import { DashboardContainer } from "../../pages/Listing";
import {
  CheckGroup,
  CheckSubGroup,
} from "../../../../searchAndFilterContainer/FilerProperty";
import { Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

import withReactContent from "sweetalert2-react-content";
import { FormParent } from "../../../../auth/StudentSignUp";
import { CustomBtnNxt, CustomBtnPrev } from "./PropertyDetetails";
import styled from "styled-components";

export const FacilityAmenities = () => {
  const MySwal = withReactContent(Swal);
  const [formValues, setFormValues] = useState(null);
  const initialValues = {
    personsInRoom: "",
    amount: "",
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

  // const validationSchema = Yup.object({
  //   personsInRoom: Yup.string()
  //     .required("Required")
  //     .min(1, "must be at least 1 characters long"),

  //   amount: Yup.string().required("Required"),
  // });

  return (
    <DashboardContainer>
      <FormParent>
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
            // console.log("Formik props", formik);
            return (
              <Form>
                <CheckGroup role="group" aria-labelledby="checkbox-group">
                  <CheckSubGroupModified>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="AirCondition"
                      />{" "}
                      Air Condition
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="Heating"
                      />
                      {"  "}
                      Heating
                    </label>

                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="Wardrobe"
                      />

                      <span> Wardrobe</span>
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="SharedKitchen"
                      />

                      <span> Shared Kitchen</span>
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="Television"
                      />{" "}
                      Television
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="Balcony"
                      />{" "}
                      Balcony
                    </label>

                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="Terrace"
                      />

                      <span> Terrace</span>
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="StudyArea"
                      />

                      <span> Study Area</span>
                    </label>
                    <label>
                      <Field type="checkbox" name="facilities" value="Water" />

                      <span> Water</span>
                    </label>
                  </CheckSubGroupModified>
                </CheckGroup>

                {/* <button type="button" onClick={() => setFormValues(savedValues)}>
                Load saved data
              </button> */}
                {/* <button type="reset">Reset</button> */}

                <ControLButtons>
                  <div style={{ display: "flex", gap: "10%" }}>
                    <CustomBtnPrev type="button">Prev</CustomBtnPrev>

                    <CustomBtnNxt
                      // onClick={submitForm}
                      type="submit"
                      // disabled={!formik.isValid || formik.isSubmitting}
                    >
                      Publish
                    </CustomBtnNxt>
                  </div>
                </ControLButtons>
              </Form>
            );
          }}
        </Formik>
      </FormParent>
    </DashboardContainer>
  );
};

const CheckSubGroupModified = styled(CheckSubGroup)`
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
`;

export const ControLButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
