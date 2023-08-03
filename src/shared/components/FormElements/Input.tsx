import React, { ChangeEvent, useReducer } from "react";
import { styled } from "styled-components";
import { validate } from "../../util/validator";

interface InputProps {
  id?: string;
  label: string;
  element: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  errorText?: string;
  validators?: any;
}

const inputReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

export default function Input({
  id,
  label,
  element,
  type,
  placeholder,
  rows,
  errorText,
  validators,
}: InputProps) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators: validators });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const inputElement =
    element === "input" ? (
      <StInput
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <StTextarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <StContainer>
      <StLabel htmlFor={id}>{label}</StLabel>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </StContainer>
  );
}

const StContainer = styled.div``;

const StLabel = styled.label``;
const StInput = styled.input``;
const StTextarea = styled.textarea``;
