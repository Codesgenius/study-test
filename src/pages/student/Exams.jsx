import React from "react";
import styled from "styled-components";

const Exams = () => {
  return (
    <Wrapper>
      <div className="exams-main-con">
        <h2>You currently have no exams yet</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 64px);
  width: 100%;

  .exams-main-con {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Exams;
