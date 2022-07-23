import React from "react";
import styled from "styled-components";

const Assesments = () => {
  return (
    <Wrapper>
      <div className="assessment-main-con">
        <h2>You currently have no assessments yet</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: calc(100vh - 64px);
  width: 100%;

  .assessment-main-con {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Assesments;
