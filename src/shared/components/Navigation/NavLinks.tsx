import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../../../styles/devices";

export default function NavLinks() {
  return (
    <Stul>
      <Stli>
        <StNavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          ALL USERS
        </StNavLink>
      </Stli>
      <Stli>
        <StNavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/:userId/places"
        >
          MY PLACES
        </StNavLink>
      </Stli>
      <Stli>
        <StNavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/places/new"
        >
          ADD PLACE
        </StNavLink>
      </Stli>
      <Stli>
        <StNavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/auth"
        >
          AUTHENTICATE
        </StNavLink>
      </Stli>
    </Stul>
  );
}

const Stul = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${devices.sm} {
    flex-direction: row;
  }
`;

const Stli = styled.li`
  margin: 1rem 0;
  display: inline-block;
  @media ${devices.sm} {
    margin: 0 1rem;
  }
`;

const StNavLink = styled(NavLink)`
  display: block;
  padding: 0.5rem 1rem;
  &.active {
    background-color: yellow;
  }
`;
