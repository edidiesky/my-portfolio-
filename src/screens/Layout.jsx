import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import SmallSidebar from "./sidebar/SmallSidebar";
import AboutIndex from "../components/about";
import SkillsIndex from "../components/skills";
import Work from "../components/work";
import Contactindex from "../components/contact";
import Header from "../components/common/Header";

import Message from "../components/loaders/Message";
import HeroIndex from "../components/hero";
import AboutMeIndex from "../components/aboutme";
import { Footer } from "../components/common";
const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgb(51, 51, 51);
  .wrapperlink {
    position: fixed;
    bottom: 10%;
    left: 5%;
    z-index: 30000;
  }
  .LayoutContainer {
    width: 100%;
    .container {
      width: 100%;
      overflow: hidden;
    }
  }
`;

export default function Layout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".based");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutWrapper className="based" style={{ height }}>
      <div className="LayoutContainer">
        {/* <SidebarIndex /> */}
        <div className=" wrapperlink flex column gap-3">
          <Link
            to={"https://github.com/Vivixell/portfolioVictorRobin"}
            target="_blank"
            className="social"
          >
            <BsGithub color="var(--grey-1)" fontSize={"20px"} />
          </Link>
          <Link
            to={"https://github.com/Vivixell/portfolioVictorRobin"}
            target="_blank"
            className="social"
          >
            <BsGithub color="var(--grey-1)" fontSize={"20px"} />
          </Link>
          <Link
            to={
              "https://twitter.com/DevtorCode/status/1660742554789335074?s=20"
            }
            target="_blank"
            className="social"
          >
            <BsTwitter color="var(--grey-1)" fontSize={"20px"} />
          </Link>
          <Link
            to={"https://linkedin.com/in/robinvictoro"}
            target="_blank"
            className="social"
          >
            <AiFillLinkedin color="var(--grey-1)" fontSize={"20px"} />
          </Link>
        </div>
        <Message />
        {/* <Header /> */}
        <SmallSidebar />
        <div className="container">
          <HeroIndex />
          <AboutMeIndex/>
          <AboutIndex />
          <SkillsIndex />
          {/* <AboutIndex />
          <SkillsIndex />
          <Work />
          <Contactindex /> */}
          <Footer/>
        </div>
      </div>
    </LayoutWrapper>
  );
}
