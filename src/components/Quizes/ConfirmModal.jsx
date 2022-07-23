import React from "react";
import styled from "styled-components";
import SlickButton from "../Buttons/SlickButton";
import { FaTimes } from "react-icons/fa";

const ConfirmModal = ({ action, close }) => {
  return (
    <Wrapper>
      <div className="confirm-main-con">
        <div className="confirm-con">
          <h3>Are you sure to start the quiz?</h3>
          <p>Once you start the quiz, you cannot pause the time</p>
          <p>
            If your time runs out, you answers will be submitted automatically
          </p>
          <p>You must not leave the exam window once started</p>
        </div>

        <div className="confirm-button-con" onClick={action}>
          <SlickButton text={"Start Quiz"} />
        </div>

        <div className="close-btn" onClick={close}>
          <FaTimes />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  background-color: rgba(0, 0, 0, 0.5);

  .confirm-main-con {
    position: relative;
    min-width: fit-content;
    width: 300px;
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

    .confirm-button-con {
      display: flex;
      justify-content: center;
    }

    .close-btn {
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
      border: 2px solid rgba(255,0, 0, 0.5);
      color: red;
      transition: all 0.3s ease-in-out;

      &:hover {
        border:2px solid red;
      }
    }
  }

  .
`;

export default ConfirmModal;
