import React, { useState } from "react";
import styled from "styled-components";
import {
  GreenBtn,
  GreenBtnOutine,
  NavContainer,
} from "../../utils/modules/modules";
import logo from "../../asserts/images/gam 2 png 1.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { LandingPage } from "../home/LandingPage";
import "./navbar.css";

export const Navbar = () => {
  const [active, setActive] = useState("/");

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

            <UserContainer>
              <GreenBtnOutine whileTap={{ scale: 0.8 }}> Log In</GreenBtnOutine>
              <GreenBtn whileTap={{ scale: 0.8 }}>Sign Up</GreenBtn>
            </UserContainer>
          </ComponentContainer>
        </Container>
      </NavContainer>
      <Outlet />
    </>
  );
};

const LogoContainer = styled(motion.div)``;

const ComponentContainer = styled.div`
  display: flex;
`;
const Pages = styled(motion.div)`
  display: flex;

  align-items: center;
  margin-right: ${(p) => p.theme.sizes[3]};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled(Link)`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 25px;
  text-decoration: none;
`;

const UserContainer = styled.div``;
