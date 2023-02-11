import React from "react";
import styled from "styled-components";
import {
  GreenBtn,
  GreenBtnOutine,
  NavContainer,
} from "../../utils/modules/modules";
import logo from "../../asserts/images/gam 2 png 1.png";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import { LandingPage } from "../home/LandingPage";

export const Navbar = () => {
  return (
    <>
      <NavContainer>
        <Container>
          <LogoContainer whileTap={{ scale: 0.6 }}>
            <Link to={`home`}>
              <img src={logo} />
            </Link>
          </LogoContainer>
          <ComponentContainer>
            <Pages>
              <NavLinks to={`aboutUs`}>About Us</NavLinks>
              <NavLinks to={`help`}>Help</NavLinks>
              <NavLinks to={`listProperties`}>List Properties</NavLinks>
            </Pages>

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
const Pages = styled.div`
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
  padding: 0 25px;
  text-decoration: none;
`;

const UserContainer = styled.div``;
