import React from "react";
import styled from "styled-components";
import Range from "./Range";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => navigate("/student/courses/DM1923")}>
      <div className="card-content">
        <h3 className="c-code">MTH 2021/10238</h3>
        <p className="c-title">Mathematics</p>
        <h1 className="cur-score">{(20 + Math.random() * 80).toFixed(2)}%</h1>
        <h4 className="ovr-score">
          Overall score: {(5 + Math.random() * 80).toFixed(2)}%
        </h4>
        <p className="instructor">
          Instructor: <span>Dr. Thomas Phillips</span>
        </p>
        <Range score={Math.floor(20 + Math.random() * 80)} />
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  padding: 20px;
  border-radius: 7px;
  background-color: #fcfcfc;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  .card-content {
    & > h3,
    & > h4 {
      margin: 0;
    }

    .c-title {
      margin: 0;
    }

    .cur-score {
      margin: 5px 0;
      font-size: 2.5rem;
    }

    .instructor {
      margin: 0 0 10px 0;
    }
  }
`;

export default Card;
