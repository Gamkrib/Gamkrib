import React from "react";
import noUser from "../asserts/siteLogos/user.png";
import { motion } from "framer-motion";
import { DescriptionText } from "../utils/modules/modules";
import { LitleBigText, LocationText } from "./Card";
import styled from "styled-components";

export const RectangularCard = (props) => {
  return (
    <RectangularContainer>
      <HeadingContainer>
        <Avatar src={props.image || noUser} />
        <div>
          {" "}
          <div>
            <LitleBigText>
              {props.text || "No user Name provided"}
              <br />
              <LocationText>
                {props.subText || "Name of your School "}
              </LocationText>
            </LitleBigText>
          </div>
        </div>
      </HeadingContainer>
      <div>
        <DescriptionText>
          {props.testimony ||
            "Lorem ipsum dolor sit amet consectetur. Condimentum interdum auctor in id nisi purus feugiat tempor. Tincidunt sit amet mauris nunc ultricies bibendum et hendrerit. Gravida sagittis purus fringilla nibh dui scelerisque. "}
        </DescriptionText>
      </div>
    </RectangularContainer>
  );
};

const RectangularContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 460px;
  height: 200px;
  border-radius: 30px;
  padding: ${(p) => p.theme.space[1]};
  justify-content: center;
  background-color: white;
`;

const Avatar = styled.img`
  height: 63px;
  padding-right: 20px;
`;
const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;
