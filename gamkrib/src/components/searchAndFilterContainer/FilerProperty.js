import React, { useContext } from "react";
import { PopUpCardTemp } from "../cards/Modules/PopUpCardTemplate";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";
import "./filter.css";
// images for the inputs
import hostelImage from "../../asserts/inputIcons/bed.png";
import homestelImage from "../../asserts/inputIcons/house.png";
import apartmentImage from "../../asserts/inputIcons/houseWithoutThree.png";
import { SelectedHostelContext } from "../../context/selectedPropertyContext/SelectedPropertyContextProvider";
import { motion } from "framer-motion";
import {
  FormContainer,
  NameFieldContainer,
  StyledFieldForName,
  StyledLabel,
} from "../auth/FormStyles";

export const FilerProperty = () => {
  const { value, setValue } = useContext(SelectedHostelContext);

  const initialValues = {
    PropertyType: "",
    minPrice: "",
    maxPrice: "",
  };

  const onSubmit = (values, submitProps) => {
    console.log("From FilterComponent ", values);
    console.log("submitProps", submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();

    // this gives the user an alert message if from values are collected
  };

  return (
    <PopUpCardTemp>
      {" "}
      <div>
        <h1>Sign Up</h1>
        <Formik
          validateOnBlur={true}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form>
              <div id="my-radio-group">Picked</div>
              <PropertyType role="group" aria-labelledby="my-radio-group">
                <div>
                  <label>
                    <PictureStyledField
                      whileTap={{ scale: 0.9 }}
                      className={value === "hostel" ? "active" : ""}
                      onClick={() => setValue("hostel")}
                    >
                      <RadioBox className="checkColor">
                        <Field
                          type="radio"
                          name="PropertyType"
                          value="hostel"
                        />
                        <img src={hostelImage} height="40px" />
                        <p> Hostel</p>
                      </RadioBox>
                    </PictureStyledField>
                  </label>
                </div>

                <div>
                  <label>
                    <PictureStyledField
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setValue("homestel")}
                      className={value === "homestel" ? "active" : ""}
                    >
                      <Field
                        type="radio"
                        name="PropertyType"
                        value="homestel"
                      />
                      <img src={homestelImage} height="40px" />
                      <p> Homestel</p>
                    </PictureStyledField>
                  </label>
                </div>
                <div>
                  <label>
                    <PictureStyledField
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setValue("apartment")}
                      className={value === "apartment" ? "active" : ""}
                    >
                      <Field
                        type="radio"
                        name="PropertyType"
                        value="apartment"
                      />
                      <img src={apartmentImage} height="40px" />
                      <p> Apartment</p>
                    </PictureStyledField>
                  </label>
                </div>
              </PropertyType>
              <PriceRange>
                <NameFieldContainer>
                  <FormContainer>
                    <PriceLabel htmlFor="minPrice">Min PRice</PriceLabel> <br />
                    <PriceField type="text" id="minPrice" name="minPrice" />
                    {/* <ErrorMessage name="firstName" component={TextError} /> */}
                  </FormContainer>
                  <FormContainer>
                    <PriceLabel htmlFor="maxPrice">Max Price</PriceLabel> <br />
                    <PriceField type="text" id="maxPrice" name="maxPrice" />
                    {/* <ErrorMessage name="lastName" component={TextError} /> */}
                  </FormContainer>
                </NameFieldContainer>
              </PriceRange>
              <div>Picked: {values.picked}</div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </PopUpCardTemp>
  );
};

const PictureStyledField = styled(motion.div)`
  & input {
    display: none;
  }
  &:checked + {
  }

  width: 100px;
  height: 80px;

  border: 2px solid;
  border-color: ${(p) => p.theme.colors.ui.borderStroke};
  padding: ${(p) => p.theme.radius[0]};
  border-radius: ${(p) => p.theme.radius[3]};
  display: flex;
  flex-direction: column;

  align-items: center;
  cursor: pointer;
`;

const PropertyType = styled.div`
  display: flex;
  gap: 2rem;
`;
const RadioBox = styled.div`
  & input {
    display: none;
  }
  &:checked + ${PictureStyledField} {
    border: 2px solid;
    border-color: green;
    background-color: pink;
  }
`;

const PriceRange = styled(NameFieldContainer)`
  padding-top: 20px;
`;

const PriceLabel = styled(StyledLabel)`
  font-size: ${(p) => p.theme.fontSizes.caption};
`;

const PriceField = styled(StyledFieldForName)`
  height: 35px;
`;
