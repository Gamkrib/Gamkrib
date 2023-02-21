import React, { useState } from "react";
import styled from "styled-components";
import { ComponentContainer, NavLinks } from "../navbar/navbarStyles";
import "../navbar/navbar.css";
import { Outlet } from "react-router-dom";
export const ListProperties = () => {
  const [active, setActive] = useState("hostel");
  const [toggle, setToggle] = useState("yes");

  const toggleNav = () => {
    setToggle((prev) => (prev === "no" ? "yes" : "no"));
    console.log(displayNav);
  };

  const displayNav = toggle === "no" ? "block" : "none";

  return (
    <div>
      <ComponentContainer>
        <SelectSection>
          <div>
            <Link
              onClick={() => setActive("hostel")}
              className={active === "hostel" ? "active" : ""}
              to={`Properties`}
            >
              Hostel
            </Link>
            <Link
              onClick={() => setActive("homestel")}
              className={active === "homestel" ? "active" : ""}
              to={`Properties/homestel`}
            >
              Homestel
            </Link>
            <Link>Apartment</Link>
          </div>
        </SelectSection>
      </ComponentContainer>
      <Outlet />
    </div>
  );
};

const SelectSection = styled.div`
  display: flex;
  background-color: green;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Link = styled(NavLinks)`
  font-size: 25px;
`;
