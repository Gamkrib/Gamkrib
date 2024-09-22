import React, { useState } from "react";
import { GeneralNavbar } from "../../../navbar/Navbar";
import { Footer } from "../../../footer/Footer";
import { PageLayout } from "../../../../utils/modules/PageLayout";
import styled from "styled-components";
import { BigText } from "../../../home/landingStyles";
import dummyImage from "../../../../asserts/images/Rectangle 22766.png";
import dummyImage1 from "../../../../asserts/images/Rectangle 22735-1.png";
import dummyImage2 from "../../../../asserts/images/Rectangle 22735-2.png";
import dummyImage3 from "../../../../asserts/images/Rectangle 22735.png";
import { Container, Modal, Paper } from "@mantine/core";
import { GreenBtnOutine } from "../../../../utils/modules/modules";
import { GreenBtn } from "../../../../customComponetns/BigButton";
import { useDisclosure } from "@mantine/hooks";
import * as Yup from "yup";
import { ErrorMessage, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { plainAPi } from "../../../auth/axios/axios";
import {
  FormContainer,
  NameFieldContainer,
  StyledField,
  StyledFieldForName,
  StyledLabel,
} from "../../../auth/FormStyles";
import { TextError } from "../../../../utils/formModules/ErrorText";
import { SelectComponent } from "../../../../utils/formModules/SelectComponent";
import { PhoneInputField } from "../../../../utils/formModules/PhoneInputField";
import { CustomBtn } from "../../../auth/StudentSignUp";

const validationSchema = Yup.object({
  level: Yup.string().required("Required"),
});
const initialValues = {
  level: "",
  phone_number: "",
};

const MySwal = withReactContent(Swal);

export const PropertyDetailsPage = () => {
  const [formValues, setFormValues] = useState(null);
  const s = localStorage.getItem("gamId");
  const details = JSON.parse(s);
  const [showContact, setShowContact] = useState(false);
  const number = showContact ? "059 323 434" : " Call Land Lord/Lady";
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const onSubmit = (values, submitProps) => {
    const base = async (route) => {
      try {
        setIsLoading(true);
        let v = JSON.stringify(values);

        localStorage.setItem("gamkribUserBooked", v);

        MySwal.fire({
          title: "Payment Made successfully",
          text: "Landlord will reach out soon!",
          icon: "success",
          confirmButtonColor: "#30D158",
        });

        navigate("/student-dashboard");
        setIsLoading(false);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
      } catch (error) {
        setIsLoading(false);
        MySwal.fire({
          title: "Ops, Field to Submit Forms!",
          text: "Click okay to return",
          icon: "error",
          confirmButtonColor: "#30D158",
        });
        return console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    base();
    submitProps.setSubmitting(false);
    submitProps.resetForm();

    // this gives the user an alert message if from values are collected
  };

  const dropDownOptionsForLevel = [
    { key: "Select Telco", value: "" },
    { key: "MTN", value: "MTN" },
    { key: "at", value: "at" },
    { key: "Telecel", value: "Telecel" },
  ];
  return (
    <>
      <GeneralNavbar />
      <Modal
        size={"31rem"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        opened={opened}
        onClose={close}
        title="Payment"
        centered
      >
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
                    name="level"
                    label="Telecommunications"
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

                <CustomBtn
                  type="submit"
                  //  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Make this room yours🎉
                </CustomBtn>
              </Form>
            );
          }}
        </Formik>
      </Modal>
      <PageLayout>
        <MainInfo>
          <BigText style={{ fontWeight: 700, textAlign: "start" }}>
            Property Info
          </BigText>
          <ImageContainer>
            <BigImage>
              <PreviewListing src={details.images[2]} />
            </BigImage>
            <SubImages>
              <SmallImge
                src={details.images[1]}
                sizes="5rem"
                alt="img will be changed later "
              />
              <SmallImge src={details.images[0]} sizes="5rem" alt="img" />
              <SmallImge src={details.images[3]} sizes="5rem" alt="img" />
              <SmallImge src={details.images[2]} sizes="5rem" alt="img" />
            </SubImages>
          </ImageContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "60vw",
            }}
          >
            <div>
              <p style={{ fontSize: 25 }}>Gender: {details?.det?.gender} </p>
              <p style={{ fontSize: 25 }}>Location: {details.locationText} </p>
              <p style={{ fontSize: 20 }}>
                Number of Beds: {details?.det.number_of_beds}{" "}
              </p>
              <p style={{ fontSize: 20 }}>
                Number of rooms: {details.det.number_of_rooms}{" "}
              </p>
            </div>
            <Paper style={{ backgroundColor: "#eafaee", padding: "10px" }}>
              <div>
                <p style={{ fontSize: 25 }}>Price: GH₵{details.price}.00 </p>
                <p style={{ fontSize: 20, fontWeight: 700 }}>
                  Posted by: {details.det.posted_by}
                </p>
                <GreenBtnOutine
                  onClick={() => setShowContact((prev) => !prev)}
                  whileTab={{ scale: 0.8 }}
                  style={{ width: "20rem" }}
                >
                  {number}
                </GreenBtnOutine>
              </div>
              <GreenBtn
                onClick={open}
                style={{ width: "20rem", marginTop: 10 }}
              >
                Book this Room
              </GreenBtn>
            </Paper>
          </div>
          <BigText style={{ textAlign: "start", marginTop: 10 }}>
            Description
          </BigText>
          <p>
            This modern student room in the heart of Accra offers a spacious,
            fully furnished living space close to major universities like the
            University of Ghana. The room includes a bed, study desk, wardrobe,
            air conditioning, fast Wi-Fi, and a private balcony with city views.
            Residents share a fully equipped kitchen, modern bathroom, lounge
            area, and laundry facilities. Safety is prioritized with 24/7
            security, CCTV, and secure entry. Rent includes utilities, weekly
            cleaning, and access to maintenance services. Located near public
            transport and shops, it provides a perfect blend of convenience,
            comfort, and security for students. Flexible payment plans are
            available.
          </p>
        </MainInfo>
      </PageLayout>
      <Footer />
    </>
  );
};

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
`;

export const BigImage = styled.div`
  width: 50%;
  border-radius: 30px;
`;
export const SubImages = styled.div`
  width: 50%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const PreviewListing = styled.img`
  width: 50rem;
  border-radius: 15px;
`;
export const SmallImge = styled.img`
  width: 22rem;
  height: 15rem;
  gap: 2rem;
  border-radius: 15px;
`;
