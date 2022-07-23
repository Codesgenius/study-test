import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ScoreCard from "../../components/Courses/ScoreCard";
import CourseImage from "../../asset/imgs/math.jpg";
import { courses } from "../../utils/courses";
import UnitTimeline from "../../components/Courses/UnitTimeline";

const CourseDetails = () => {
  return (
    <Wrapper image={CourseImage}>
      <div className="page-header">
        <div className="course-details-con">
          <div className="course-details">
            <h2>{courses[0].courseCode}</h2>
            <p>{courses[0].title}</p>
            <p>
              Total Units: <span>{courses[0].courseUnit}</span>
            </p>
            <p>
              Duration: <span>{courses[0].duration} weeks</span>
            </p>

            <div className="course-instructor">
              <p>
                Instructor: <span>{courses[0].instructor}</span>
              </p>
              <div className="message-quizes:">
                <div>Message Instructor</div>
              </div>
            </div>
          </div>

          <div className="scores-con">
            <ScoreCard
              customClass="primary"
              title="Current Score"
              description="The average score for all assessments already completed"
              score={78}
            />
            <ScoreCard
              customClass="secondary"
              title="Total Score"
              description="Total score, outstanding assesments are counted as zero"
              score={56}
            />
          </div>
        </div>

        <div className="course-materials-con">
          <h2>Course Materials</h2>

          <div className="course-materials">
            <div className="course-material">
              <h3>Material Name</h3>
              <Link to="/">https://www.youtube.com/watch?v=QH2-TGUlwu4</Link>
            </div>
            <div className="course-material">
              <h3>Material Name</h3>
              <Link to="/">https://www.youtube.com/watch?v=QH2-TGUlwu4</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="timeline-section">
        <h2>Units Timeline</h2>

        <div className="timeline-section-main">
          {courses[0].units.map((unit, index) => (
            <UnitTimeline {...unit} key={index} open={index <= 2} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;

  .course-details-con {
    position: relative;
    display: flex;
    padding: 20px;
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 20px;
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .course-details {
      z-index: 2;
      flex: 5;
      color: #fff;

      p > span {
        font-weight: bold;
      }

      .course-instructor {
        .message-instructor {
          width: fit-content;
          padding: 10px;
          background-color: rgb(14, 41, 95);
          border-radius: 7px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            background-color: rgba(14, 41, 95, 0.8);
          }
        }

        p > span {
          font-weight: bold;
        }
      }
    }
    .scores-con {
      z-index: 2;
      flex: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
    }
  }

  .course-materials {
    .course-material {
      background-color: #f5f5f5;
      padding: 10px;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      margin-bottom: 15px;

      h3 {
        margin: 0;
      }
    }
  }
`;

export default CourseDetails;
