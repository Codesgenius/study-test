import React from "react";
import styled from "styled-components";

const Range = ({ total = 100, score = 0, label = false }) => {
  return (
    <Container points={(score / total) * 100} showLabel={label}>
      <div className="range-con">
        <div className="range"></div>
      </div>
      <div className="score-text">
        <span>{(score / total) * 100}%</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    .score-text {
        display: ${({ showLabel }) => (showLabel ? "block" : "none")};
        padding-left: 10px;
        font-weight: bold;
        color: ${({ points }) =>
          points >= 75 ? "green" : points >= 50 ? "orange" : "red"};
    }

    .range-con {
        width: 100%;
        height: 10px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

        .range {
            width: ${({ points }) => points}%;
            height: 100%;
            border-radius: inherit;
            background-color: ${({ points }) =>
              points >= 75 ? "green" : points >= 50 ? "orange" : "red"};
    }
`;

export default Range;
