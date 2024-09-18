import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ComponentContainer, NavLinks } from "../navbar/navbarStyles";
import "../navbar/navbar.css";
import { Outlet } from "react-router-dom";
import { GeneralNavbar } from "../navbar/Navbar";
import { SelectedPropertyContext } from "../../context/selectedPropertyContext/SelectedPropertyContextProvider";
export const ListProperties = () => {
  const { isActive, setIsActive } = useContext(SelectedPropertyContext);

  return (
    <div>
      <GeneralNavbar />
      <ComponentContainer>
        <SelectSection>
          <div>
            <Link
              onClick={() => setIsActive("hostel")}
              className={isActive === "hostel" ? "active" : ""}
              to={`/listProperties`}
            >
              Hostel
            </Link>
            <Link
              onClick={() => setIsActive("homestel")}
              className={isActive === "homestel" ? "active" : ""}
              to={`/listProperties/homestel`}
            >
              Homestel
            </Link>
            <Link
              onClick={() => setIsActive("apartment")}
              className={isActive === "apartment" ? "active" : ""}
              to={`/listProperties/apartment`}
            >
              Apartment
            </Link>
          </div>
        </SelectSection>
      </ComponentContainer>
      <Outlet />
    </div>
  );
};

const SelectSection = styled.div`
  display: flex;

  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Link = styled(NavLinks)`
  font-size: 25px;
`;
