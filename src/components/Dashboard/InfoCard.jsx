import React from "react";
import styled from "styled-components";

const InfoCard = ({ title, description, comp, points, bold, customClass }) => {
  return (
    <Container className={customClass} bold={bold}>
      <div>
        <h2 className="title">{title}</h2>
        {description && (
          <h4 className="desc">
            {description ||
              "Lorem ipsum dolor sit amet consectetur adipisicing."}
          </h4>
        )}
      </div>
      {bold && <h2 className="bold-points">{points}</h2>}
      <div className="card-bottom">
        <p className="comp">{comp || "Lorem ipsum dolor sit amet"}</p>
        {!bold && (
          <div>
            <div className="points">
              <h2>{points}</h2>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 20px;
  border-radius: 20px;
  color: #fff;

  &.primary {
    background-color: rgb(14, 41, 95);
  }

  &.secondary {
    background-color: rgb(6, 88, 6);
  }

  &.guest {
    background-color: rgb(149, 13, 13);
  }

  .card-bottom {
    margin-top: 20px;
    display: flex;

    .comp {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 10px;
      font-weight: 600;
      text-align: ${({ bold }) => (bold ? "center" : "left")};
      margin: 0 ${({ bold }) => (bold ? "auto" : "0")};
    }

    .points {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: snow;
      border-radius: 50%;
      border: 6px solid #54a452;
      color: black;

      h2 {
        margin: 0;
      }
    }
  }

  .title,
  .desc {
    margin: 5px 0;
  }

  .bold-points {
    font-size: 3rem;
    margin: 15px 0 0 0;
    text-align: center;
  }
`;

export default InfoCard;
