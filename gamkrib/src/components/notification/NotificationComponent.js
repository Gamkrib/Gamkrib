import React, { useContext } from "react";
import styled from "styled-components";
import notificationIcon from "../../asserts/siteLogos/Combined-Shape.png";
import { GeneralNavbar } from "../navbar/Navbar";
import { MockApiContext } from "../../context/MockApiContext";
import { motion } from "framer-motion";

export const NotificationComponent = () => {
  const { notification, setNotification } = useContext(MockApiContext);
  console.log(notification);

  //remove function goes here
  const deleteNotification = (id) => {
    setNotification((current) =>
      current.filter((notification) => notification.id !== id)
    );
  };

  return (
    <>
      <GeneralNavbar />
      <ParentContainer>
        {/* This card will use a map function to map all notifications from the API */}
        <p style={{ fontFamily: "poppins", fontSize: "2rem" }}>
          {" "}
          Notification{" "}
        </p>
        {notification &&
          notification.posts.map((post) => {
            return (
              <motion.div
                whileHover={{
                  shadow: 0.2,
                  cursor: "pointer",
                  backgroundColor: "#F2F5F0",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <NotificationCard>
                  <Icon>
                    <img src={notificationIcon} height="22px" />
                  </Icon>
                  <NotificationBody>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",

                        justifyContent: "space-between",
                      }}
                    >
                      <NotificationHead>{post.title} 🔥 </NotificationHead>
                      <CloseBtn
                        whileHover={{
                          shadow: 0.2,
                          cursor: "pointer",
                          backgroundColor: "#ff314e",
                          color: "white",
                        }}
                        onClick={deleteNotification(post.id)}
                      >
                        X
                      </CloseBtn>
                    </div>

                    <p>{post.body}</p>
                  </NotificationBody>
                </NotificationCard>
              </motion.div>
            );
          })}
      </ParentContainer>{" "}
    </>
  );
};

const NotificationCard = styled.div`
  display: flex;
  gap: 2rem;

  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  background-color: ${(p) => p.theme.colors.bg.light};
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const NotificationHead = styled.span`
  font-family: "poppins";
  font-weight: 500;
  font-size: 2;
`;

const NotificationBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
`;

const ParentContainer = styled.div`
  margin: 4rem 20rem;
  display: flex;
  flex-direction: column;
`;

const CloseBtn = styled(motion.span)`
  height: 20px;
  background-color: ${(p) => p.theme.colors.bg.light};
  width: 40px;
  border-radius: 30px;
  text-align: center;
  font-size: 12px;
`;
