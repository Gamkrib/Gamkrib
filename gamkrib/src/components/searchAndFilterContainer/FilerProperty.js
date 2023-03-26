import React, { useContext } from "react";
import { PopUpCardTemp } from "../cards/Modules/PopUpCardTemplate";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";
import "./filter.css";
// images for the inputs

import { SelectedHostelContext } from "../../context/selectedPropertyContext/SelectedPropertyContextProvider";
import { motion } from "framer-motion";
import {
  NameFieldContainer,
  StyledFieldForName,
  StyledLabel,
} from "../auth/FormStyles";
import { GreenBtn, MidText } from "../../utils/modules/modules";

// Image imports
import hostelImage from "../../asserts/inputIcons/bed.png";
import homestelImage from "../../asserts/inputIcons/house.png";
import apartmentImage from "../../asserts/inputIcons/houseWithoutThree.png";

import wifi from "../../asserts/inputIcons/internet.png";
import television from "../../asserts/inputIcons/television.png";
import fun from "../../asserts/inputIcons/fun.png";
import kitchen from "../../asserts/inputIcons/kitchen.png";

import fire from "../../asserts/inputIcons/Fire.png";
import tender from "../../asserts/inputIcons/highVoltage.png";
import smileWithHeart from "../../asserts/inputIcons/smileWithHeartEyes.png";
import smile from "../../asserts/inputIcons/SmileFace.png";
import sleepy from "../../asserts/inputIcons/sleepy.png";

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
    facilities: "",
  };

  const onSubmit = (values, submitProps) => {
    console.log("From FilterComponent ", values);
    console.log("submitProps", submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();

    //se color props to none

    // this gives the user an alert message if from values are collected
  };

  const resetFunc = () => {
    console.log("hi");
    setRoomType("");
    setPropertyType("");
    setPropertyRating("");
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

                          <span>
                            {" "}
                            <RatingImage src={fire} />
                          </span>
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
                          <RatingImage src={tender} /> <span> Very good</span>
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

                          <RatingImage src={smileWithHeart} />
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

                          <RatingImage src={smile} />
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

                          <RatingImage src={sleepy} />
                          <span> Okay</span>
                        </RadioBox>
                      </StyledPropertyRatingField>
                    </label>
                  </div>
                </PropertyRating>
              </div>
              <div>
                <HeadingText>Property Rating</HeadingText>

                <CheckGroup role="group" aria-labelledby="checkbox-group">
                  <CheckSubGroup>
                    <label>
                      <Field type="checkbox" name="facilities" value="wifi" />
                      <RatingImage src={wifi} />
                      Wifi
                    </label>
                    <label style={{ marginLeft: 43 }}>
                      <Field type="checkbox" name="facilities" value="fan" />
                      <RatingImage src={fun} />
                      Fan
                    </label>
                  </CheckSubGroup>
                  <CheckSubGroup>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="television"
                      />
                      <RatingImage src={television} />
                      <span> Television</span>
                    </label>
                    <label>
                      <Field
                        type="checkbox"
                        name="facilities"
                        value="kitchen"
                      />
                      <RatingImage src={kitchen} />
                      <span>Kitchen</span>
                    </label>
                  </CheckSubGroup>
                </CheckGroup>
              </div>
              <div
                style={{
                  borderBottom: "1px solid #919191 ",
                  marginLeft: 0,
                  marginRight: 0,
                  paddingBottom: 10,
                }}
              ></div>
              {/* <div>Picked: {values}</div> */}
              <SubmitContainer>
                {/* <button type=""></button> */}
                <ResetButton
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ color: "red" }}
                  onClick={resetFunc}
                  type="reset"
                >
                  {" "}
                  reset all
                </ResetButton>
                <div>
                  <GreenBtn whileTap={{ scale: 0.9 }} type="submit">
                    Filter Result
                  </GreenBtn>
                </div>
              </SubmitContainer>

              {/* <button type="submit">Submit</button> */}
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

const CheckGroup = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: column;
`;

const CheckSubGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

const RatingImage = styled.img`
  height: 18px;
  margin: 10px;
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ResetButton = styled(motion.button)`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
