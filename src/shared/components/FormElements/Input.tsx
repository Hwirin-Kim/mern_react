import React from "react";
import { styled } from "styled-components";

interface InputProps {
  id?: string;
  label: string;
  element: string;
  type?: string;
  placeholder?: string;
  rows?: number;
}

export default function Input({
  id,
  label,
  element,
  type,
  placeholder,
  rows,
}: InputProps) {
  const inputElement =
    element === "input" ? (
      <StInput id={id} type={type} placeholder={placeholder} />
    ) : (
      <StTextarea id={id} rows={rows || 3} />
    );

  return (
    <StContainer>
      <StLabel htmlFor={id}>{label}</StLabel>
      {inputElement}
    </StContainer>
  );
}

const StContainer = styled.div``;

const StLabel = styled.label``;
const StInput = styled.input``;
const StTextarea = styled.textarea``;
