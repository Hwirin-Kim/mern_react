import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import useFormHook from "../../shared/hooks/useFormHook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validator";

export default function Authenticate() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }

    setIsLoginMode((prev) => !prev);
  };

  const [formState, inputHandler, setFormData] = useFormHook(
    {
      email: {
        value: "",
        isFinite: false,
      },
      password: {
        value: "",
        isFinite: false,
      },
    },
    false
  );

  const authSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit success");
  };

  return (
    <StContainer>
      <h2>Login required</h2>
      <hr />

      <StForm onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid email address"
          onInput={inputHandler}
        />
        <Button disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "Sign up"}
        </Button>
      </StForm>
      <Button onClick={switchModeHandler}>
        Switch to {isLoginMode ? "sign up." : "login."}
      </Button>
    </StContainer>
  );
}
const StContainer = styled.div``;

const StForm = styled.form``;
