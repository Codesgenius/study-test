import React from "react";
import styled from "styled-components";

const ScoreCard = ({ title, description, score, customClass }) => {
  return (
    <Container group={customClass}>
      <div className="con-left">
        <h4>{title || ""}</h4>
        <p>{description || ""}</p>
      </div>

      <div className="con-right">
        <span>{score}</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: ${({ group }) =>
    group === "primary"
      ? "rgb(206 206 239)"
      : group === "secondary"
      ? "rgb(214 239 214)"
      : "#f5f5f5"};

  .con-left {
    flex: 1;
    h4 {
      margin: 0;
    }
    p {
      color: gray;
      font-size: 0.8rem;
      margin: 0;
    }
  }

  .con-right {
    display: flex;
    align-items: center;
    color: rgb(14, 41, 95);
    width: fit-content;
    padding: 0 20px;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export default ScoreCard;
