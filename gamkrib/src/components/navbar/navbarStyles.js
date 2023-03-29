import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
export const LogoContainer = styled(motion.div)``;

export const ComponentContainer = styled.div.attrs({
  className: "desktop",
})`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const PhoneContainer = styled.div.attrs({
  className: "phone",
})`
  display: none;
  flex-direction: column;

  @media (max-width: 768px) {
    display: block;
  }
`;
// export const Pages = styled(motion.div)`
//   display: flex;
//   align-items: center;
//   margin-right: ${(p) => p.theme.sizes[3]};

//   @media (max-width: 768px) {
//     display: block;
//     margin-top: 20px;
//     background-color: mediumvioletred;
//   }
// `;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLinks = styled(Link)`
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 25px;
  text-decoration: none;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const UserContainer = styled.div``;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.div``;
export const NotificationIcon = styled(motion.div)`
  flex-direction: row;
  display: flex;
  margin: 5px;
  height: 46px;
  width: 46px;
  background-color: ${(p) => p.theme.colors.ui.darkGray};
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media (max-width: 768px) {
    position: relative;
    right: 4rem;
  }
`;

export const ToggleContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;

    top: 25px;
    align-items: center;
    text-align: end;
  }
`;

export const NotificationCount = styled.div`
  position: absolute;
  background-color: #30d158;
  height: 22px;
  width: 22px;
  padding-bottom: 10;
  text-align: center;
  color: white;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
`;

export const MainNotificationCount = styled(NotificationCount)`
  top: 25px;
`;
