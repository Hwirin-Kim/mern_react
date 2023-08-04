import React, { FormEvent } from "react";
import styled from "styled-components";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import useFormHook from "../../shared/hooks/useFormHook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validator";

export default function NewPlace() {
  const [formState, inputHandler] = useFormHook(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Title: ${formState.inputs.title.value}
      Description: ${formState.inputs.description.value}`
    );
  };

  return (
    <StForm onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        label="Title"
        errorText="Please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        errorText="Please enter a valid description (at least 5 characters)."
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        errorText="Please enter a valid address."
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
      />
      <Button disabled={!formState.isValid}>ADD PLACE</Button>
    </StForm>
  );
}

const StForm = styled.form`
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background: white;
`;
