import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaBell, FaSearch, FaAngleDown } from "react-icons/fa";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { toggleSideBar } from "../redux/userSlice";
import { routes } from "../utils/routes";

const TopNav = () => {
  const dispatch = useDispatch();
  const isSideNavOpen = useSelector((state) => state.user.isSideNavOpen);
  const userType = useSelector((state) => state.user.account);
  const location = useLocation();

  return (
    <Wrapper>
      <div className="nav-left">
        <div
          className={`hamburger ${isSideNavOpen ? "opened" : ""}`}
          onClick={() => dispatch(toggleSideBar())}
        >
          <RiMenuUnfoldLine className="toggle-menu" />
        </div>

        <h3 className="page-title">
          {routes[userType].find((route) => route.path === location.pathname)
            .title || "StudyTest"}
        </h3>
      </div>

      <div className="nav-right">
        <div className="icons">
          <FaSearch className="search-icon" />
          <FaBell className="notification-icon" />
        </div>

        <div className="user-profile">
          <div className="img-con">
            <img
              src="https://source.unsplash.com/1600x900"
              alt="user-profile"
            />
          </div>
          <FaAngleDown />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #fcfcfc;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  .nav-left {
    display: flex;
    align-items: center;

    .page-title {
      padding-left: 10px;

      @media (max-width: 900px) {
        padding-left: 80px;
      }
    }

    .hamburger {
      position: absolute;
      display: none;
      background-color: rgb(14, 41, 95);
      color: snow;
      padding: 10px 0 5px 0;
      margin: 0 10px;
      border-radius: 7px;
      z-index: 100;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: rgba(14, 41, 95, 0.8);
      }

      @media (max-width: 900px) {
        display: block;
      }

      &.opened .toggle-menu {
        transform: scaleX(-1);
      }

      &.opened {
        margin-left: 250px;
      }

      .toggle-menu {
        font-size: 1.5rem;
        margin: 0 15px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  .nav-right {
    display: flex;
    align-items: center;

    .user-profile {
      display: flex;
      align-items: center;
      cursor: pointer;

      .img-con {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .icons {
      font-size: 1.5rem;

      .notification-icon {
        cursor: pointer;
        color: rgb(131, 30, 55);
        margin: 0 15px;

        @media (max-width: 475px) {
          margin: 0 5px;
        }

        &:hover {
          color: rgb(172, 55, 84);
        }
      }

      .search-icon {
        cursor: pointer;
        color: rgb(28, 39, 139);
        margin: 0 10px;

        @media (max-width: 475px) {
          margin: 0 5px;
        }

        &:hover {
          color: rgb(55, 67, 172);
        }
      }
    }
  }
`;

export default TopNav;
