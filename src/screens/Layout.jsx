import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Link as Links } from "react-scroll";

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
import WorkIndex from "../components/work";
import MottoIndex from "../components/motto";
const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgb(51, 51, 51);
  .list {
    position: fixed;
    top: 6%;
    right: 5%;
    z-index: 30000;
    gap: .5rem;
    justify-content: flex-end;
    .linktext2 {
      font-weight: 700;
    }
  }
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

const data = [
  { id: 1, title: "About", path: "about" },
  { id: 3, title: "Work", path: "work" },
  { id: 5, title: "Contact", path: "contact" },
];

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

        <div className="flex item-end justify-end column list flex-1">
          {data.map((x) => {
            return (
              <Links
                spy={true}
                smooth={true}
                duration={1000}
                className="linktext2 family1 linktext1 text-extra-bold fs-12 text-grey text-light"
                to={`${x.path}`}
                key={x.id}
              >
                {x.title}
              </Links>
            );
          })}
        </div>
        <div className="container">
          <HeroIndex />
          <AboutMeIndex />
          <AboutIndex />
          <WorkIndex />
          <SkillsIndex />
          <MottoIndex/>
          <Footer />
        </div>
      </div>
    </LayoutWrapper>
  );
}
