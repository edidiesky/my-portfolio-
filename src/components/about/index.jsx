import React, { useState } from "react";
import styled from "styled-components";
import { Head } from "../common";
import Input from "../forms/Input";
import { BiChevronRight } from "react-icons/bi";

const Skills = [
  "https://v1.brittanychiang.com/img/skills/html.png",
  "https://v1.brittanychiang.com/img/skills/css.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/node.png",
  "https://v1.brittanychiang.com/img/skills/mongodb.png",
  "https://v1.brittanychiang.com/img/skills/github.png ",
  "https://v1.brittanychiang.com/img/skills/angular.png",
  "./tech/redux.png",
  "https://v1.brittanychiang.com/img/skills/python.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
];

const tools = [
  {
    description:
      "I strive to create pixel-perfect websites and applications that not only look great but also have a solid foundation of clean, modular, and efficient code.I am committed to maintaining a semantic structure and implementing the DRY (Don't Repeat Yourself) principle, ensuring scalability and maintainability of the projects I work on.    ",
    title: "WEB DEVELOPMENT",
    icon: "https://v2.brittanychiang.com/img/icons/html.png",
  },
  {
    description:
      "With a deep understanding of media queries, I ensure that the websites and applications I develop adapt flawlessly to various platforms. By utilizing key concepts in grid and flex, I streamline the development process, allowing me to create responsive UIs that are not only aesthetically pleasing but also perform optimally on any device.",
    title: "KEEN IN RESPONSIVE DEVELOPMENT",
    icon: "https://v2.brittanychiang.com/img/icons/pencil.png",
  },
  {
    description:
      "As a developer I seek to create satisfaction in delivering efficient products, nothwithstanding I also seek that I keep to the set time for the project completion.",
    title: "STICKS TO DEADLINE",
    icon: "https://v2.brittanychiang.com/img/icons/internet.png",
  },
  {
    description:
      "Versed and passionate in the application of modern technology, I believe that these technologies can lead to a more better and faster innovative solutions to problems in the industry. ",
    title: "VERSED IN MODERN TECHNOLOGIES",
    icon: "https://v2.brittanychiang.com/img/icons/ux-design.png",
  },
];

export default function AboutIndex() {
  return (
    <SkillsWrapper id="about">
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-white text-start"
          >
            What I Do
          </h4>
        </div>
        <div className="w-100 grid">
          <div className="left flex item-start column">
            <h2 className="fs-70 uppercase text-grey text-start">Responsive design</h2>
            <h2 className="fs-70 uppercase text-grey text-start">Api development</h2>
            <h2 className="fs-70 uppercase text-grey text-start">Motion </h2>
            <h2 className="fs-70 uppercase text-grey text-start">Maintainable Codebase</h2>
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  place-items: center;
  padding: 6rem 0;
  padding-top: 15rem;
  transform-style: inherit;

  .text1,
  .head {
    @media (max-width: 580px) {
      width: 90%;
      text-align: start;
      margin: 0;
    }
  }

  .heads::after {
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: var(--secondary);
    bottom: -25%;
    left: 0%;
    content: "";
  }
  h2 {
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 100px;
    @media (max-width: 780px) {
      font-size: 45px;
    }
  }

  .icon1 {
    filter: brightness(100%);
    transition: all 0.6s ease;
  }
  img {
    width: 4rem;
    @media (max-width: 480px) {
      width: 4rem;
    }
  }
  .left {
    padding: 3rem 0;
  }
`;
