import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

const FormInput = ({ type, value, showPassword, toggleEye, ...otherProps }) => {
  return (
    <Container>
      <input
        {...otherProps}
        className="form-input"
        type={showPassword ? "text" : type || "text"}
        value={value || ""}
      />

      {type === "password" && (
        <span onClick={toggleEye} className="toggle-eye">
          {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
        </span>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  .form-input {
    display: flex;
    width: 100%;
    min-width: 250px;
    height: 2.5rem;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    outline: none;
    border: 2px solid transparent;
    box-shadow: 0px 0px 2px 1px rgba(81, 80, 90, 0.4);

    @media (max-width: 425px) {
      width: 15rem;
    }
  }

  .form-input:focus {
    border: 2px solid snow;
  }

  .toggle-eye {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0.1rem;
    right: 1rem;
    top: 0.1rem;
    font-size: 25px;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

export default FormInput;
