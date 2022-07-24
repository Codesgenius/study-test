import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import ResultModal from "../../components/Quizes/ResultModal";

const QuizesStart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title = "", quesLength = 0, duration = 0 } = location.state;
  const [quesNo, setQuesNo] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(duration);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  const [score, setScore] = useState(0);

  const getScore = useCallback(() => {
    let count = 0;

    questions.forEach((question, index) => {
      if (question.correctAnswer === userAnswers[index]) {
        count++;
      }
    });

    return count;
  }, [questions, userAnswers]);

  const handleSubmit = useCallback(() => {
    setScore(getScore());
    setShowResultModal(true);
  }, [getScore]);

  const handleNext = () => {
    if (quesNo < quesLength) {
      setQuesNo(quesNo + 1);
    }
  };

  const handlePrev = () => {
    if (quesNo > 1) {
      setQuesNo(quesNo - 1);
    }
  };

  const randomizeQuestion = (correct, incorrect) => {
    let options = [correct, ...incorrect];
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  };

  useEffect(() => {
    fetch(
      "https://the-trivia-api.com/api/questions?categories=general_knowledge,geography&limit=50&type=Multiple Choice"
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(
          data.map((question) => {
            return {
              ...question,
              options: randomizeQuestion(
                question.correctAnswer,
                question.incorrectAnswers
              ),
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      const intervalId = setInterval(() => {
        setTimeRemaining((time) => {
          if (time > 0) {
            return time - 1;
          }
          clearInterval(intervalId);
          handleSubmit();
          return time;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [questions, handleSubmit]);

  return (
    <Wrapper>
      {questions.length > 0 && (
        <div className="wrapper">
          {showResultModal && (
            <ResultModal
              action={() => navigate("/student/quizes")}
              score={score}
            />
          )}

          <div className="quiz-header">
            <h2>{title}</h2>

            <div className="ques-no">
              <h3>Question: {quesNo}</h3>
            </div>

            <div className="quiz-time">
              <p>
                Time remaining (sec): <span>{timeRemaining || ""}</span>
              </p>
            </div>
          </div>

          <div className="quiz-main-con">
            <div className="quiz-con">
              <div className="quiz-question">
                <h3>{questions[quesNo - 1].question || ""}</h3>

                <div className="quiz-options">
                  {questions[quesNo - 1].options.map((option, index) => (
                    <div
                      key={index}
                      className={`quiz-option ${
                        userAnswers[quesNo - 1] === option ? "selected" : ""
                      }`}
                      onClick={() => {
                        let newUserAnswers = [...userAnswers];
                        newUserAnswers[quesNo - 1] = option;
                        setUserAnswers(newUserAnswers);
                      }}
                    >
                      <p>{option}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="quiz-controls">
                <div className="quiz-control">
                  <div className="btn-primary" onClick={handlePrev}>
                    Prev
                  </div>
                </div>
                <div className="quiz-control">
                  {quesNo === quesLength ? (
                    <div className="btn-primary" onClick={handleSubmit}>
                      Submit
                    </div>
                  ) : (
                    <div className="btn-primary" onClick={handleNext}>
                      Next
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;

  * {
    box-sizing: border-box;
  }

  .quiz-header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .quiz-time {
      p > span {
        font-size: 1.5rem;
      }
    }
  }

  .quiz-main-con {
    .quiz-option {
      margin-bottom: 10px;
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 10px;
      cursor: pointer;
      max-width: 400px;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);

      &.selected {
        background-color: blue !important;
        color: #fff !important;
      }

      &:hover {
        background-color: #e6e6e6;
      }

      p {
        margin: 0;
      }
    }

    .quiz-controls {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      max-width: 400px;

      .quiz-control {
        padding: 7px 10px;
        font-size: 1.2rem;
        background-color: rgb(18, 84, 18);
        border-radius: 10px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
        cursor: pointer;
        color: #fff;

        &:hover {
          background-color: green;
        }
      }
    }
  }
`;

export default QuizesStart;
