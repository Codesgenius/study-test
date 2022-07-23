import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { VscTriangleDown } from "react-icons/vsc";

const UnitTimeline = ({
  title,
  description,
  unitMaterials,
  assignments,
  quizes,
  open,
}) => {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <Container>
      <div className="unit-main-con">
        <div
          className="unit-title-con"
          onClick={() => setOpenDetails(!openDetails)}
        >
          <h3>{title}</h3>
          <VscTriangleDown
            className={`angle-down ${openDetails ? "open" : ""}`}
          />
        </div>

        <div className={`unit-activity-con ${openDetails ? "open" : ""}`}>
          {open ? (
            <div className="unit-activity-inner">
              <div className="unit-description">
                <span className="unit-labels">Description: </span>
                <span>{description}</span>
              </div>

              <div className="unit-materials">
                <p className="unit-labels">Materials: </p>

                {unitMaterials.map((material, index) => (
                  <div className="unit-material" key={index}>
                    <p>{material.title}</p>
                    <Link to={material.url}>{material.url}</Link>
                  </div>
                ))}
              </div>

              <div className="unit-assignments">
                <p className="unit-labels">Assignments: </p>
                {assignments.map((assignment, index) => (
                  <div className="unit-assignment" key={index}>
                    <p>
                      {index + 1}) {assignment}
                    </p>
                  </div>
                ))}
              </div>

              <div className="unit-quizes">
                <p className="unit-labels">Quizes: </p>

                {quizes.map((quiz, index) => (
                  <div
                    className="unit-quiz"
                    onClick={() => console.log(quiz)}
                    key={index}
                  >
                    <span>Quiz {index}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="activity-not-open">
              <p>Activity not open</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .unit-main-con {
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    margin-bottom: 10px;

    .unit-title-con {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
      cursor: pointer;

      h3 {
        margin: 0;
      }

      .angle-down {
        transition: all 0.3s ease-in-out;

        &.open {
          transform: rotate(180deg);
        }
      }
    }

    .unit-activity-con {
      max-height: 0;
      overflow: hidden;
      transition: all 0.3s ease-in-out;

      &.open {
        max-height: 1000px;
        overflow-y: auto;
      }
    }

    .unit-activity-inner {
      padding: 10px;

      .unit-labels {
        font-weight: bold;
        margin-top: 10px;
      }

      p {
        margin: 0;
      }

      .unit-quiz {
        display: inline-block;
        color: #fff;
        width: fit-content;
        padding: 10px;
        background-color: rgb(14, 41, 95);
        border-radius: 7px;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        margin-right: 10px;

        &:hover {
          background-color: rgba(14, 41, 95, 0.8);
        }
      }
    }

    .activity-not-open {
        text-align: center;
    }
  }
`;

export default UnitTimeline;
