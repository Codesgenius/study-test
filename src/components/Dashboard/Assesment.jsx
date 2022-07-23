import React from "react";
import styled from "styled-components";
import Range from "../Courses/Range";

const Assesment = ({ week, score }) => {
  return (
    <Container>
      <div className="con-left">
        <h4>Week 1</h4>
        <p>week {week} unit title</p>
        <Range score={score} />
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
  padding: 0 10px 20px 10px;
  border-radius: 20px;
  background-color: #f5f5f5;

  .con-left {
    flex: 1;
    h4 {
      margin-bottom: 0;
    }
    p {
      color: gray;
      margin-top: 0;
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

export default Assesment;
