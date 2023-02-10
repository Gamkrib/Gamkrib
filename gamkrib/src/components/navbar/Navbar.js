import React from "react";
import styled from "styled-components";
import {
  GreenBtn,
  GreenBtnOutine,
  NavContainer,
} from "../../utils/modules/modules";
import logo from "../../asserts/images/gam 2 png 1.png";

export const Navbar = () => {
  return (
    <NavContainer>
      <Container>
        <LogoContainer>
          <img src={logo} />
        </LogoContainer>
        <ComponentContainer>
          <Pages>
            <NavLinks>About Us</NavLinks>
            <NavLinks>Help</NavLinks>
            <NavLinks>List Properties</NavLinks>
          </Pages>

          <UserContainer>
            <GreenBtnOutine> Log In</GreenBtnOutine>
            <GreenBtn>Sign Up</GreenBtn>
          </UserContainer>
        </ComponentContainer>
      </Container>
    </NavContainer>
  );
};

const LogoContainer = styled.div``;

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

const NavLinks = styled.div`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 25px;
`;

const UserContainer = styled.div``;
