import React from "react";
import styled from "styled-components";

const SlickButton = ({ text, ...rest }) => {
  return (
    <Container {...rest}>
      <span>{text}</span>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  width: fit-content;
  padding: 10px;
  background-color: rgb(14, 41, 95);
  border-radius: 7px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(14, 41, 95, 0.8);
  }
`;

export default SlickButton;
