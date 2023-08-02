import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../../../styles/devices";
import BackDropPortal from "./BackDropPortal";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

export default function MainNavigation() {
  const navigator = useNavigate();

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const onClose = (): void => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <BackDropPortal onClose={onClose} />}
      <SideDrawer onClose={onClose} drawerIsOpen={drawerIsOpen}>
        <NavLinks />
      </SideDrawer>

      <MainHeader>
        <StHamburgerBtn onClick={() => setDrawerIsOpen((prev) => !prev)}>
          <StHamburger />
          <StHamburger />
          <StHamburger />
        </StHamburgerBtn>
        <StMainTitle onClick={() => navigator("/")}>YourPlaces</StMainTitle>
        <StNav>
          <NavLinks />
        </StNav>
      </MainHeader>
    </>
  );
}

const StHamburgerBtn = styled.button`
  width: 3rem;
  height: 3rem;
  border: none;
  flex-direction: column;
  justify-content: space-around;
  background-color: transparent;
  display: flex;
  @media ${devices.sm} {
    display: none;
  }
`;

const StHamburger = styled.div`
  display: block;
  width: 3rem;
  height: 2.5px;
  background-color: white;
`;

const StMainTitle = styled.h1`
  font-weight: bold;
  margin-left: 1rem;
  color: white;
  @media ${devices.sm} {
    font-size: 1.5rem;
  }
`;

const StNav = styled.nav`
  display: none;
  @media ${devices.sm} {
    display: block;
    margin-left: auto;
  }
`;
