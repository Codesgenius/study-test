import React from "react";
import styled from "styled-components";
import SlickButton from "../Buttons/SlickButton";
import { FaTimes } from "react-icons/fa";

const ResultModal = ({ action, close, score }) => {
  return (
    <Wrapper>
      <div>
        <div className="confirm-main-con">
          <div className="confirm-con">
            <h3>Quiz score</h3>
            <p>You scored {score} out of 25</p>

            <div className="quiz-score">
              <div className="quiz-score-inner">
                <h1>{Math.floor((score / 25) * 100)}%</h1>
              </div>
            </div>
          </div>

          <div className="confirm-button-con" onClick={action}>
            <SlickButton text={"Back to Quizes"} />
          </div>

          {close && (
            <div className="close-btn" onClick={close}>
              <FaTimes />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);

  * {
    box-sizing: border-box;
  }

  .confirm-main-con {
    position: relative;
    min-width: 300px;
    width: 100%;
    max-width: max-content;
    background-color: #f5f5f5;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

    .confirm-button-con {
      display: flex;
      justify-content: center;
    }

    .quiz-score {
        display: flex;
        justify-content: center;
        align-items: center;

        .quiz-score-inner {
            width: 180px;
            height: 180px;
            font-size: 2.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            background-color: #fff;
            border: 4px solid blue;
            margin-bottom: 20px;

            h1 {
                margin: 0;
            }
        }   
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

export default ResultModal;
