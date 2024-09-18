import { useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import CloudinaryUploadWidget from "./CWidjet";
import { Button, Container, Flex } from "@mantine/core";
import homeGif from "../../../../../asserts/images/3d-casual-life-happy-man-with-laptop-showing-ok-hand-sign.png";
import { theme } from "../../../../../theme";
import { data } from "autoprefixer";
export const ImagePrev = (props) => {
  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("djzn1iixv");
  // Replace with your own upload preset
  const [uploadPreset] = useState("halumx55");

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  //previous fields
  const a = localStorage.getItem("propDetails");
  const previousFields = JSON.parse(a);
  const s = localStorage.getItem("propStrings");
  const uploadedeImages = JSON.parse(s);
  const clearImages = () => {
    localStorage.setItem("propStrings", "");
  };

  // Submitting properties
  const submitListing = async () => {
    try {
      const formData = {
        ...previousFields,
        images: uploadedeImages,
      };
    } catch (error) {}
  };

  // submitListing();
  return (
    <div className="App">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 style={{ textAlign: "center", marginTop: "1rem" }}>
          Let add some images to make your listing awesome!🎉
        </h3>
        <img src={homeGif} alt="a man with a laptop" />
        <Flex gap={10}>
          <CloudinaryUploadWidget
            uwConfig={uwConfig}
            setPublicId={setPublicId}
          />
          <Button
            onClick={clearImages}
            style={{ backgroundColor: "red", height: "3.4em" }}
          >
            Clear
          </Button>
        </Flex>
        <p></p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {uploadedeImages &&
            uploadedeImages?.map((i) => (
              <img style={{ width: "300px" }} alt="" src={i} />
            ))}
        </div>{" "}
        <Button
          disabled={!uploadedeImages}
          mt={10}
          style={{
            backgroundColor: !uploadedeImages
              ? "gray"
              : theme.colors.brand.primary,
            height: "3.4em",
            width: "20em",
          }}
        >
          Submit Listing
        </Button>
      </Container>
    </div>
  );
};
