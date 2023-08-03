import React from "react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";

interface SideDrawerProps {
  children: React.ReactNode;
  onClose: () => void;
  drawerIsOpen: boolean;
}

export default function SideDrawer({
  children,
  onClose,
  drawerIsOpen,
}: SideDrawerProps) {
  const content = (
    <StAside onClick={onClose} drawerIsOpen={drawerIsOpen}>
      {children}
    </StAside>
  );
  const root = document.getElementById("drawer-hook")!;
  return ReactDOM.createPortal(content, root);
}

const StAside = styled.aside<{ drawerIsOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ drawerIsOpen }) => (drawerIsOpen ? "0" : "-100%")};
  z-index: 11;
  height: 100vh;
  width: 50%;
  background-color: white;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: left 0.3s ease-out;
`;
