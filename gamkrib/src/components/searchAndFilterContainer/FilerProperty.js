import React from "react";
import { PopUpCardTemp } from "../cards/Modules/PopUpCardTemplate";
import { Formik, Field, Form } from "formik";
import styled from "styled-components";
import "./filter.css";
// images for the inputs
import hostelImage from "../../asserts/inputIcons/bed.png";
import homestelImage from "../../asserts/inputIcons/house.png";
import apartmentImage from "../../asserts/inputIcons/houseWithoutThree.png";

export const FilerProperty = () => {
  return (
    <PopUpCardTemp>
      {" "}
      <div>
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            picked: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <div id="my-radio-group">Picked</div>
              <PropertyType role="group" aria-labelledby="my-radio-group">
                <div>
                  <label>
                    <PictureStyledField className="ui input">
                      <div className="checkColor">
                        <Field type="radio" name="picked" value="hostel" />
                        <img src={hostelImage} height="40px" />
                        <p> Hostel</p>
                      </div>
                    </PictureStyledField>
                  </label>
                </div>

                <div>
                  <label>
                    <PictureStyledField className="ui input">
                      <Field type="radio" name="picked" value="homestel" />
                      <img src={homestelImage} height="40px" />
                      <p> Homestel</p>
                    </PictureStyledField>
                  </label>
                </div>
                <div>
                  <label>
                    <PictureStyledField className="ui input">
                      <Field type="radio" name="picked" value="apartment" />
                      <img src={apartmentImage} height="40px" />
                      <p> Apartment</p>
                    </PictureStyledField>
                  </label>
                </div>
              </PropertyType>
              <div>Picked: {values.picked}</div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </PopUpCardTemp>
  );
};

const PictureStyledField = styled.div`
  & input {
    display: none;
  }

  width: 100px;
  height: 80px;

  /* border: 2px solid;
  border-color: ${(p) => p.theme.colors.ui.borderStroke}; */
  padding: ${(p) => p.theme.radius[0]};
  border-radius: ${(p) => p.theme.radius[3]};
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const PropertyType = styled.div`
  display: flex;
  gap: 2rem;
`;
