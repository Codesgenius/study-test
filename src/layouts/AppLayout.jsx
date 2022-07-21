import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";

const AppLayout = () => {
  return (
    <Wrapper>
      <SideNav />

      <div className="main">
        <TopNav />
        <Outlet />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main {
    padding-left: 250px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 900px) {
      padding-left: 0;
    }
  }
`;
export default AppLayout;
