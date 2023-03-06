import React, { useState } from "react";
import styled from "styled-components";
import {
  CustomLink,
  GreenBtn,
  GreenBtnOutine,
  NavContainer,
} from "../../utils/modules/modules";

import logo from "../../asserts/images/gam 2 png 1.png";
import avatar from "../../asserts/siteLogos/icons8-account-96.png";
import notificationIcon from "../../asserts/siteLogos/Combined-Shape.png";
import mockProfile from "../../asserts/mockImages/Ellipse 3.png";

import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

import "./navbar.css";
import {
  ComponentContainer,
  Container,
  LogoContainer,
  NavLinks,
  NotificationIcon,
  PhoneContainer,
  ProfileContainer,
  ProfilePicture,
  ToggleContainer,
  UserContainer,
} from "./navbarStyles";

export const Navbar = () => {
  const [active, setActive] = useState("/");

  //this puts a dommy image as profile will be replaced with user profile from api call
  let userProfilePicture = mockProfile;

  const [user, setUser] = useState(false);
  const [toggle, setToggle] = useState("yes");

  const toggleNav = () => {
    setToggle((prev) => (prev === "no" ? "yes" : "no"));
    console.log(displayNav);
  };

  const displayNav = toggle === "no" ? "block" : "none";

  const Pages = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-right: ${(p) => p.theme.sizes[3]};

    @media (max-width: 768px) {
      display: ${displayNav && displayNav};
      margin-top: 20px;
    }
  `;

  return (
    <>
      <NavContainer>
        <Container>
          <LogoContainer whileTap={{ scale: 0.6 }}>
            <Link to={`/`} onClick={() => setActive("/")}>
              <img src={logo} />
            </Link>
          </LogoContainer>
          <ComponentContainer>
            {
              <AnimatePresence exitBeforeEnter>
                <Pages
                  // key={selectedTab ? selectedTab.label : "empty"}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <NavLinks
                    onClick={() => setActive("aboutUs")}
                    className={active === "aboutUs" ? "active" : ""}
                    to={`aboutUs`}
                  >
                    About Us
                  </NavLinks>
                  <NavLinks
                    onClick={() => setActive("help")}
                    className={active === "help" ? "active" : ""}
                    to={`help`}
                  >
                    Help
                  </NavLinks>
                  <NavLinks
                    onClick={() => setActive("listProperties")}
                    className={active === "listProperties" ? "active" : ""}
                    to={`listProperties`}
                  >
                    List Properties
                  </NavLinks>
                </Pages>
              </AnimatePresence>
            }

            <UserContainer>
              {user ? (
                <ProfileContainer>
                  <NotificationIcon whileTap={{ scale: 0.8 }}>
                    <div>
                      <img height="22px" src={notificationIcon} />
                    </div>
                  </NotificationIcon>
                  <ProfilePicture>
                    <motion.img
                      src={userProfilePicture || avatar}
                      height="46px"
                      whileTap={{ scale: 0.8 }}
                    />
                  </ProfilePicture>
                </ProfileContainer>
              ) : (
                <>
                  <GreenBtnOutine whileTap={{ scale: 0.8 }}>
                    Log In
                  </GreenBtnOutine>

                  <CustomLink to={"/studentSignup"}>
                    <GreenBtn whileTap={{ scale: 0.8 }}>Sign Up</GreenBtn>
                  </CustomLink>
                </>
              )}
            </UserContainer>
          </ComponentContainer>
          <PhoneContainer>
            <UserContainer>
              {user ? (
                <ProfileContainer>
                  <NotificationIcon whileTap={{ scale: 0.8 }}>
                    <div>
                      <img height="22px" src={notificationIcon} />
                    </div>
                  </NotificationIcon>
                  <ToggleContainer>
                    <ProfilePicture
                      onClick={() => {
                        toggleNav();
                      }}
                    >
                      <motion.img
                        src={userProfilePicture || avatar}
                        height="46px"
                        whileTap={{ scale: 0.8 }}
                      />
                    </ProfilePicture>
                    <AnimatePresence exitBeforeEnter>
                      <Pages
                        // key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <NavLinks
                            onClick={() => setActive("aboutUs")}
                            className={active === "aboutUs" ? "active" : ""}
                            to={`aboutUs`}
                          >
                            About Us
                          </NavLinks>
                        </div>
                        <div>
                          <NavLinks
                            onClick={() => setActive("help")}
                            className={active === "help" ? "active" : ""}
                            to={`help`}
                          >
                            Help
                          </NavLinks>
                        </div>
                        <div>
                          <NavLinks
                            onClick={() => setActive("listProperties")}
                            className={
                              active === "listProperties" ? "active" : ""
                            }
                            to={`listProperties`}
                          >
                            List Properties
                          </NavLinks>
                        </div>
                      </Pages>
                    </AnimatePresence>
                  </ToggleContainer>
                </ProfileContainer>
              ) : (
                <>
                  <GreenBtnOutine whileTap={{ scale: 0.8 }}>
                    Log In
                  </GreenBtnOutine>
                  <CustomLink to={"/studentSignup"}>
                    <GreenBtn whileTap={{ scale: 0.8 }}>Sign Up</GreenBtn>
                  </CustomLink>
                </>
              )}
            </UserContainer>
          </PhoneContainer>
        </Container>
      </NavContainer>
      <Outlet />
    </>
  );
};

export const GeneralNavbar = () => {
  const [active, setActive] = useState("/");

  //this puts a dommy image as profile will be replaced with user profile from api call
  let userProfilePicture = mockProfile;

  const [user, setUser] = useState(true);
  const [toggle, setToggle] = useState("yes");

  const toggleNav = () => {
    setToggle((prev) => (prev === "no" ? "yes" : "no"));
    console.log(displayNav);
  };

  const displayNav = toggle === "no" ? "block" : "none";

  const Pages = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-right: ${(p) => p.theme.sizes[3]};

    @media (max-width: 768px) {
      display: ${displayNav && displayNav};
      margin-top: 20px;
    }
  `;

  return (
    <>
      <NavContainer>
        <Container>
          <LogoContainer whileTap={{ scale: 0.6 }}>
            <Link to={`/`} onClick={() => setActive("/")}>
              <img src={logo} />
            </Link>
          </LogoContainer>
          <ComponentContainer>
            <UserContainer>
              {user ? (
                <ProfileContainer>
                  <NotificationIcon whileTap={{ scale: 0.8 }}>
                    <div>
                      <img height="22px" src={notificationIcon} />
                    </div>
                  </NotificationIcon>
                  <ProfilePicture>
                    <motion.img
                      src={userProfilePicture || avatar}
                      height="46px"
                      whileTap={{ scale: 0.8 }}
                    />
                  </ProfilePicture>
                </ProfileContainer>
              ) : (
                <>
                  <GreenBtnOutine whileTap={{ scale: 0.8 }}>
                    Log In
                  </GreenBtnOutine>
                  <GreenBtn whileTap={{ scale: 0.8 }}>Sign Up</GreenBtn>
                </>
              )}
            </UserContainer>
          </ComponentContainer>
          <PhoneContainer>
            <UserContainer>
              {user ? (
                <ProfileContainer>
                  <NotificationIcon whileTap={{ scale: 0.8 }}>
                    <div>
                      <img height="22px" src={notificationIcon} />
                    </div>
                  </NotificationIcon>
                  <ToggleContainer>
                    <ProfilePicture
                      onClick={() => {
                        toggleNav();
                      }}
                    >
                      <motion.img
                        src={userProfilePicture || avatar}
                        height="46px"
                        whileTap={{ scale: 0.8 }}
                      />
                    </ProfilePicture>
                    <AnimatePresence exitBeforeEnter>
                      <Pages
                        // key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <NavLinks
                            onClick={() => setActive("aboutUs")}
                            className={active === "aboutUs" ? "active" : ""}
                            to={`aboutUs`}
                          >
                            About Us
                          </NavLinks>
                        </div>
                        <div>
                          <NavLinks
                            onClick={() => setActive("help")}
                            className={active === "help" ? "active" : ""}
                            to={`help`}
                          >
                            Help
                          </NavLinks>
                        </div>
                        <div>
                          <NavLinks
                            onClick={() => setActive("listProperties")}
                            className={
                              active === "listProperties" ? "active" : ""
                            }
                            to={`listProperties`}
                          >
                            List Properties
                          </NavLinks>
                        </div>
                      </Pages>
                    </AnimatePresence>
                  </ToggleContainer>
                </ProfileContainer>
              ) : (
                <>
                  <GreenBtnOutine whileTap={{ scale: 0.8 }}>
                    Log In
                  </GreenBtnOutine>
                  <GreenBtn whileTap={{ scale: 0.8 }}>Sign Up</GreenBtn>
                </>
              )}
            </UserContainer>
          </PhoneContainer>
        </Container>
      </NavContainer>
    </>
  );
};

//this helps for nav togging
