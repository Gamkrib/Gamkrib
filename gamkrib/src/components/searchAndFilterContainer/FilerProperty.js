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
  NameFieldContainer,
  StyledFieldForName,
  StyledLabel,
} from "../auth/FormStyles";
import { MidText } from "../../utils/modules/modules";

export const FilerProperty = () => {
  const {
    propertyType,
    setPropertyType,
    roomType,
    setRoomType,
    propertyRating,
    setPropertyRating,
  } = useContext(SelectedHostelContext);

  const initialValues = {
    PropertyType: "",
    minPrice: "",
    maxPrice: "",
    roomType: "",
  };

  const onSubmit = (values, submitProps) => {
    console.log("From FilterComponent ", values);
    console.log("submitProps", submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();

    //se color props to none

    // this gives the user an alert message if from values are collected
  };

  return (
    <PopUpCardTemp>
      {" "}
      <div>
        <Formik
          validateOnBlur={true}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form>
              {/* Property type */}
              <div>
                <div>
                  <HeadingText>Property Type</HeadingText>
                </div>
                <PropertyType role="group" aria-labelledby="my-radio-group">
                  <div>
                    <label>
                      <PictureStyledField
                        whileTap={{ scale: 0.9 }}
                        className={
                          propertyType === "hostel" ? "propertySelected" : ""
                        }
                        onClick={() => setPropertyType("hostel")}
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
                        onClick={() => setPropertyType("homestel")}
                        className={
                          propertyType === "homestel" ? "propertySelected" : ""
                        }
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
                        onClick={() => setPropertyType("apartment")}
                        className={
                          propertyType === "apartment" ? "propertySelected" : ""
                        }
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
              </div>
              {/* Price  field */}
              <di>
                <div style={{ paddingTop: 15 }}>
                  <HeadingText>Price Range</HeadingText>
                </div>
                <PriceRange>
                  <NameFieldContainer style={{ margin: 1 }}>
                    <FormContainer style={{ marginBottom: 0 }}>
                      <PriceLabel htmlFor="minPrice">Min PRice</PriceLabel>{" "}
                      <br />
                      <PriceField type="text" id="minPrice" name="minPrice" />
                      {/* <ErrorMessage name="firstName" component={TextError} /> */}
                    </FormContainer>
                    <FormContainer>
                      <PriceLabel htmlFor="maxPrice">Max Price</PriceLabel>{" "}
                      <br />
                      <PriceField type="text" id="maxPrice" name="maxPrice" />
                      {/* <ErrorMessage name="lastName" component={TextError} /> */}
                    </FormContainer>
                  </NameFieldContainer>
                </PriceRange>
              </di>

              {/* Room Type */}
              <div>
                <div>
                  <HeadingText>Room Type</HeadingText>
                </div>
                <RoomType role="group" aria-labelledby="my-radio-group">
                  <div>
                    <label>
                      <StyledRoomTypeField
                        whileTap={{ scale: 0.9 }}
                        className={roomType === "any" ? "selectedRoomType" : ""}
                        onClick={() => setRoomType("any")}
                      >
                        <RadioBox className="checkColor">
                          <Field type="radio" name="roomType" value="any" />

                          <p> any</p>
                        </RadioBox>
                      </StyledRoomTypeField>
                    </label>
                  </div>
                  <div>
                    <label>
                      <StyledRoomTypeField
                        whileTap={{ scale: 0.9 }}
                        className={
                          roomType === "single" ? "selectedRoomType" : ""
                        }
                        onClick={() => setRoomType("single")}
                      >
                        <RadioBox className="checkColor">
                          <Field type="radio" name="roomType" value="hostel" />

                          <p> single</p>
                        </RadioBox>
                      </StyledRoomTypeField>
                    </label>
                  </div>
                  <div>
                    <label>
                      <StyledRoomTypeField
                        whileTap={{ scale: 0.9 }}
                        className={
                          roomType === "Double" ? "selectedRoomType" : ""
                        }
                        onClick={() => setRoomType("Double")}
                      >
                        <RadioBox className="checkColor">
                          <Field type="radio" name="roomType" value="double" />

                          <p> double</p>
                        </RadioBox>
                      </StyledRoomTypeField>
                    </label>
                  </div>
                  <div>
                    <label>
                      <StyledRoomTypeField
                        whileTap={{ scale: 0.9 }}
                        className={
                          roomType === "triple" ? "selectedRoomType" : ""
                        }
                        onClick={() => setRoomType("triple")}
                      >
                        <RadioBox className="checkColor">
                          <Field type="radio" name="roomType" value="triple" />

                          <p>triple</p>
                        </RadioBox>
                      </StyledRoomTypeField>
                    </label>
                  </div>
                </RoomType>
              </div>
              {/* Property Rating  */}
              <div>
                <div>
                  <HeadingText>Property Rating</HeadingText>
                </div>
                <PropertyRating role="group" aria-labelledby="my-radio-group">
                  <div>
                    <label>
                      <StyledPropertyRatingField
                        whileTap={{ scale: 0.9 }}
                        className={
                          propertyRating === "Excellent"
                            ? "propertyRatingType"
                            : ""
                        }
                        onClick={() => setPropertyRating("Excellent")}
                      >
                        <RadioBox className="checkColor">
                          <Field
                            type="radio"
                            name="propertyRating"
                            value="Excellent"
                          />

                          <span> 🔥</span>
                          <span> Excellent</span>
                        </RadioBox>
                      </StyledPropertyRatingField>
                    </label>
                  </div>
                  <div>
                    <label>
                      <StyledPropertyRatingField
                        whileTap={{ scale: 0.9 }}
                        className={
                          propertyRating === "VeryGood"
                            ? "selectedRoomType"
                            : ""
                        }
                        onClick={() => setPropertyRating("VeryGood")}
                      >
                        <RadioBox className="checkColor">
                          <Field
                            type="radio"
                            name="propertyRating"
                            value="VeryGood"
                          />

                          <span> ⚡ </span>
                          <span> Very good</span>
                        </RadioBox>
                      </StyledPropertyRatingField>
                    </label>
                  </div>
                  <div>
                    <label>
                      <StyledPropertyRatingField
                        whileTap={{ scale: 0.9 }}
                        className={
                          propertyRating === "Good" ? "selectedRoomType" : ""
                        }
                        onClick={() => setPropertyRating("Good")}
                      >
                        <RadioBox className="checkColor">
                          <Field
                            type="radio"
                            name="propertyRating"
                            value="Good"
                          />

                          <span> 😍</span>
                          <span> Good</span>
                        </RadioBox>
                      </StyledPropertyRatingField>
                    </label>
                  </div>
                  <div>
                    <label>
                      <StyledPropertyRatingField
                        whileTap={{ scale: 0.9 }}
                        className={
                          propertyRating === "Fair" ? "selectedRoomType" : ""
                        }
                        onClick={() => setPropertyRating("Fair")}
                      >
                        <RadioBox className="checkColor">
                          <Field
                            type="radio"
                            name="propertyRating"
                            value="Fair"
                          />

                          <span> 😊</span>
                          <span> Fair</span>
                        </RadioBox>
                      </StyledPropertyRatingField>
                    </label>
                  </div>
                  <div>
                    <label>
                      <StyledPropertyRatingField
                        whileTap={{ scale: 0.9 }}
                        className={
                          propertyRating === "Okay" ? "selectedRoomType" : ""
                        }
                        onClick={() => setPropertyRating("Okay")}
                      >
                        <RadioBox className="checkColor">
                          <Field type="radio" name="roomType" value="Okay" />

                          <span> 😒</span>
                          <span> Okay</span>
                        </RadioBox>
                      </StyledPropertyRatingField>
                    </label>
                  </div>
                </PropertyRating>
              </div>

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

const StyledRoomTypeField = styled(motion.div)`
  width: 80px;
  height: 35px;

  border: 2px solid;
  border-color: ${(p) => p.theme.colors.ui.borderStroke};

  border-radius: ${(p) => p.theme.radius[3]};
  display: flex;

  justify-content: center;
  cursor: pointer;
`;

const StyledPropertyRatingField = styled(motion.div)`
  width: auto;
  height: 35px;

  border: 2px solid;
  border-color: ${(p) => p.theme.colors.ui.borderStroke};
  padding: ${(p) => p.theme.radius[1]};
  border-radius: ${(p) => p.theme.radius[3]};
  display: flex;
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
`;

const PriceRange = styled(NameFieldContainer)`
  /* padding-top: 20px; */
`;

const PriceLabel = styled(StyledLabel)`
  font-size: ${(p) => p.theme.fontSizes.caption};
`;

const PriceField = styled(StyledFieldForName)`
  height: 35px;
`;

const RoomType = styled.div`
  display: flex;
  gap: 1rem;
`;
const PropertyRating = styled.div`
  display: flex;
  gap: 1rem;
`;

const HeadingText = styled(MidText)`
  text-align: start;
  margin-bottom: 3px;
  margin-top: 15px;
  color: black;
`;

const FormContainer = styled.div``;
