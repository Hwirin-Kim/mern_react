import React from "react";
import { styled } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: string;
}

export default function Button({
  children,
  onClick,
  disabled,
  type,
}: ButtonProps) {
  return (
    <Btn disabled={disabled} onClick={onClick}>
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  background-color: pink;
  margin: 0 0.5rem;
  &:hover {
    background-color: red;
    color: yellow;
  }
`;
