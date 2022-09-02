import React from "react";
import styled from "styled-components";

const Button = styled.button`
  --colour-style: #00b0bb;

  color: white;
  border-radius: 15px;
  border: 3px solid var(--colour-style);
  border-color: var(--colour-style);
  margin-top: 50;

  background-color: var(--colour-style);
  top: 40px;
  right: 100px;
  width: 170px;
  height: 57px;
  margin-top: 50px;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: #00b0bb;
  }
`;

export default function StartButton() {
  return (
    <Button onClick={() => (window.location = "/onboarding")}>
      <b>Get Started</b>
    </Button>
  );
}
