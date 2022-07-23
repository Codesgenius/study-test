import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { toggleSideBar } from "../redux/userSlice";
import { routes } from "../utils/routes";

const SideNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSideNavOpen = useSelector((state) => state.user.isSideNavOpen);
  const userType = useSelector((state) => state.user.account);

  return (
    <Wrapper className={isSideNavOpen ? "open" : "close"}>
      <div className="wrapper">
        <div className="menu-main">
          <div className="menu-top">
            <div className="app-icon">
              <FaStar />
            </div>
            <div className="app-name">
              <h2>Study Test</h2>
            </div>
          </div>

          <div className="menu-links">
            {routes[userType].map((route, index) => (
              <NavLink
                key={index}
                to={route.path}
                onClick={() => dispatch(toggleSideBar())}
              >
                <StyledNavLink
                  className={location.pathname === route.path ? "active" : ""}
                >
                  {route.title}
                </StyledNavLink>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="menu-bottom">
          <div className="logout" onClick={() => navigate("/auth/login")}>
            <h3>Sign out</h3>
            <div className="logout-icon">
              <RiLogoutCircleRLine />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  color: snow;
  width: 250px;
  min-width: fit-content;
  background-color: rgb(14, 41, 95);
  display: flex;
  transition: all 0.3s ease-in-out;

  @media (max-width: 900px) {
    margin-left: -250px;

    &.open {
      margin-left: 0;
    }
  }

  .wrapper {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  .menu-top {
    display: flex;
    padding-bottom: 20px;

    .app-icon {
      font-size: 2rem;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .app-name {
      width: 80%;
      padding-left: 10px;
    }
  }

  .menu-main .menu-links {
    display: flex;
    flex-direction: column;

    & a {
      color: snow;
      text-decoration: none;
      margin-bottom: 10px;
    }
  }

  .menu-bottom > .logout {
    display: flex;
    padding: 10px;
    cursor: pointer;
    border-radius: 7px;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(202, 210, 226, 0.1);
    }

    .logout-icon {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }

    & > h3 {
      width: 80%;
      margin: 0;
    }
  }
`;

const StyledNavLink = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 7px;
  transition: background-color 0.2s ease-in-out;

  &.active {
    background-color: rgba(202, 210, 226, 0.4) !important;
  }

  &:hover {
    background-color: rgba(202, 210, 226, 0.1);
  }
`;
export default SideNav;
