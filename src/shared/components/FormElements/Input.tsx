import React, { ChangeEvent, useEffect, useReducer } from "react";
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
  onInput: Function;
  propsInitialValue?: string;
  propsInitialValid?: boolean;
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
  onInput,
  propsInitialValue,
  propsInitialValid,
}: InputProps) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: propsInitialValue || "",
    isValid: propsInitialValid || false,
    isTouched: false,
  });
  const { value, isValid, isTouched } = inputState;
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid]);

  const changeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators: validators });
  };

  const touchHandler = () => {
    dispatch({ type: "TOUCH" });
  };
  console.log(type, isValid, "why??");
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
      <StLabel error={!isValid && isTouched} htmlFor={id}>
        {label}
      </StLabel>
      {inputElement}
      {!inputState.isValid && inputState.isTouched && (
        <StError>{errorText}</StError>
      )}
    </StContainer>
  );
}

const StContainer = styled.div`
  margin-bottom: 1rem;
`;

const StLabel = styled.label<{ error: boolean }>`
  font-weight: bold;
  display: block;
  margin-bottom: 0.1rem;
  ${({ error }) => error && "color:red"}
`;
const StInput = styled.input`
  width: 100%;
  border-radius: 0.2rem;
  border: 1px solid grey;
  padding: 0.2rem 0.5rem;
`;
const StTextarea = styled.textarea`
  width: 100%;
  outline: none;
  resize: none;
  border-radius: 0.2rem;
  border: 1px solid grey;
  padding: 0.2rem 0.5rem;
`;

const StError = styled.p`
  margin-top: 0.2rem;
  color: red;
`;
