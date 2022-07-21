import React from "react";
import styled from "styled-components";
import Card from "../../components/Courses/Card";

const Courses = () => {
  return (
    <Wrapper>
      <div className="page-header">
        <h2>2021/2022 session</h2>
        <p>Course overview for 2nd semester</p>
      </div>

      <div className="courses-section">
        {Array.from([1, 2, 3, 4, 5]).map((index) => (
          <Card key={index} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;

  .page-header {
    padding: 0 20px;

    & > h2,
    & > p {
      margin: 0;
    }
  }

  .courses-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Courses;
