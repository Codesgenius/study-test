import React from "react";
import styled from "styled-components";
import { MdVerified } from "react-icons/md";
import InfoCard from "../../components/Dashboard/InfoCard";
import Assesment from "../../components/Dashboard/Assesment";
import ProfileImage from "../../asset/imgs/profile.jpg";

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="page-header"></div>

      <div className="update-con">
        <p>
          <span>NEW</span> Proctored exam now available
        </p>
      </div>

      <div className="user-info-con">
        <div className="profile-image-con">
          <div className="img-con">
            <img src={ProfileImage} alt="profile" />
          </div>
        </div>

        <div className="user-info-details">
          <h2>
            Justin Charles{" "}
            <span>
              <MdVerified />{" "}
            </span>
          </h2>
          <p>B.sc Computer science and engineering</p>
          <h3>Year 3</h3>
          <h3>2nd Semester</h3>
        </div>
      </div>

      <div className="info-card-con">
        <InfoCard
          customClass="primary"
          title="Your Progress"
          description="You're currently in week 2 of 12"
          comp="Keep up the pace, you're strong"
          points="98%"
        />

        <InfoCard
          customClass="secondary"
          title="Cummulative Score"
          points="4.78"
          comp="Your grades cummulative average so far"
          bold={true}
        />

        <InfoCard
          customClass="guest"
          title="Semester Grade"
          points="A"
          comp="Grades as at the end of the previous semester"
          bold={true}
        />
      </div>

      <section className="activity">
        <h2>Activities</h2>
        <div className="activity-main-con">
          <div className="activity-con">
            <div className="activity-con-top">
              <h3>This week schedule</h3>
              <h4>WEEK 2</h4>
            </div>

            <div className="activities-con-bottom">
              <h3>No activities yet</h3>
            </div>
          </div>

          <div className="assessments">
            <div className="assessments-con-top">
              <h3>Assessments</h3>
            </div>

            <div className="assessments-con-bottom">
              {Array.from([57, 76, 34, 54, 86]).map((item, index) => (
                <Assesment key={index} score={item} week={index + 1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;

  .update-con {
    padding: 8px 12px;
    border-radius: 20px;
    background-color: #f5f5f5;

    p {
      margin: 0;
      font-weight: bold;

      span {
        background-color: blue;
        padding: 2px 5px;
        color: #fff;
        border-radius: 12px;
        margin-right: 10px;
        font-style: italic;
      }
    }
  }

  .user-info-con {
    display: flex;
    gap: 10px;
    padding: 10px;
    border: 2px dotted blue;
    margin-top: 10px;
    border-radius: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
    }

    .profile-image-con {
      width: 20%;
      min-width: 250px;
      max-width: 350 0px;
      border-radius: 15px;
      overflow: hidden;

      @media (max-width: 600px) {
        min-width: 200px;
        width: 100%;
      }

      .img-con {
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .user-info-details {
      padding: 0 10px;

      & > h2,
      & > p {
        margin: 0;
      }

      & > h3 {
        margin: 5px 0;
      }

      & > h2 > span {
        color: rgb(14, 41, 95);
      }
    }
  }

  .info-card-con {
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    @media (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  .activity {
    .activity-main-con {
      display: flex;
      gap: 20px;

      @media (max-width: 600px) {
        flex-direction: column;
      }
    }

    .activity-con {
      flex: 5;
      border: 2px solid #f5f5f5;
      border-radius: 20px;
      padding: 20px;
      color: rgb(102, 95, 95);

      @media (max-width: 600px) {
        padding: 10px;
      }

      .activity-con-top {
        display: flex;
        justify-content: space-between;

        h4 {
          padding: 5px 7px;
          background-color: rgb(14, 41, 95);
          border-radius: 10px;
          color: #fff;
          margin: 0;
        }
        h3 {
          margin: 0;
        }
      }

      .activities-con-bottom {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .assessments {
      flex: 3;

      .assessments-con-top > h3 {
        color: rgb(102, 95, 95);
      }

      .assessments-con-bottom {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
    }
  }
`;

export default Dashboard;
