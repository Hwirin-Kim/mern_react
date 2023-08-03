import React from "react";
import styled from "styled-components";
import Input from "../../shared/components/FormElements/Input";

export default function NewPlace() {
  return (
    <StForm>
      <Input element="input" type="text" label="Title" />
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
