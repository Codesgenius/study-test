import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../../components/Quizes/ConfirmModal";

const Quizes = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const action = () => {
    navigate("/student/quizes/start", {
      state: {
        title: "Mathematical Logic Quiz 1",
        quesLength: 25,
        duration: 60,
      },
    });
  };
  return (
    <Wrapper>
      <div className="quizes-main-con">
        <div className="course-group">
          <h2>DM1923</h2>

          <div className="quizes-con">
            <div className="quiz-con">
              <div className="quiz-info">
                <h3>Mathematical Logic Quiz 1</h3>
                <p>No of questions: 25</p>
                <p>Time limit: 30 mins</p>
                <p>Due: 23 July, 2022. 11:59pm</p>
              </div>

              <div className="quiz-button-con">
                <div className="quiz-button">
                  <span onClick={() => setShowConfirm(true)}>Take Quiz</span>
                </div>
              </div>
            </div>

            <div className="quiz-con">
              <div className="quiz-info">
                <h3>Mathematical Logic Quiz 2</h3>
                <p>No of questions: 25</p>
                <p>Time limit: 30 mins</p>
                <p>Due: 23 July, 2022. 11:59pm</p>
              </div>

              <div className="quiz-button-con">
                <div className="quiz-button">
                  <span onClick={() => setShowConfirm(true)}>Take Quiz</span>
                </div>
              </div>
            </div>
          </div>

          <h2>ST1923</h2>

          <div className="quizes-con">
            <div className="quiz-con">
              <div className="quiz-info">
                <h3>Sampling Distribution Quiz 1</h3>
                <p>No of questions: 25</p>
                <p>Time limit: 30 mins</p>
                <p>Due: 23 July, 2022. 11:59pm</p>
              </div>

              <div className="quiz-button-con">
                <div className="quiz-button">
                  <span onClick={() => setShowConfirm(true)}>Take Quiz</span>
                </div>
              </div>
            </div>

            <div className="quiz-con">
              <div className="quiz-info">
                <h3>Binomial Distribution Quiz 2</h3>
                <p>No of questions: 25</p>
                <p>Time limit: 30 mins</p>
                <p>Due: 23 July, 2022. 11:59pm</p>
              </div>

              <div className="quiz-button-con">
                <div className="quiz-button">
                  <span onClick={() => setShowConfirm(true)}>Take Quiz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal action={action} close={() => setShowConfirm(false)} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;

  .quizes-con {
    .quiz-con {
      background-color: #f5f5f5;
      padding: 10px;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;

      .quiz-button-con {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .quiz-button {
          width: fit-content;
          color: #fff;
          padding: 10px;
          background-color: rgb(14, 41, 95);
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
        }
      }

      .quiz-info {
        h3 {
          margin- top: 0;
        }
        p {
          margin: 5px 0;
        }
      }
    }
  }
`;

export default Quizes;
