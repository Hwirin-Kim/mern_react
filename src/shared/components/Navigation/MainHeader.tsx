import React from "react";
import styled from "styled-components";

interface MainHeaderProps {
  children: React.ReactNode;
}

export default function MainHeader({ children }: MainHeaderProps) {
  return <StHeader>{children}</StHeader>;
}

const StHeader = styled.header`
  background-color: #fdacac;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 0 1rem;
`;
