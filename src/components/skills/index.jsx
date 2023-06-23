import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const Skills = [
  "https://v1.brittanychiang.com/img/skills/html.png",
  "https://v1.brittanychiang.com/img/skills/css.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/node.png",
  "https://v1.brittanychiang.com/img/skills/mongodb.png",
  "https://v1.brittanychiang.com/img/skills/github.png ",
  "./tech/redux.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/linux.png",
  "./tech/nodejs.png",
  "./tech/reactjs.png",
  "./tech/typescript.png",
  "./tech/tailwind.png",
  "./tech/git.png",
];

const newskills = [
  "Reactjs",
  "Tailwind css",
  "Gsap",
  "Expressjs",
  "Nodejs",
  "MongoDb",
  "Nextjs",
  "Typescriptjs",
  "git",
  "Redux",
];

const tools = ["Command Line", "Post Man", "Git + Github", "Chrome DevTools"];

const tools2 = ["Redux", "Redux Dev tool", "Context Api"];

export default function SkillsIndex() {
  const SkillsLeft = () => {
    return (
      <div className="left w-85 auto h-100 flex column gap-1">
        <div className="w-100 auto">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-grey family1 text-start flex item-center gap-2"
          >
            <img
              src="https://v2.brittanychiang.com/img/icons/settings.png"
              alt=""
              className="icon1"
            />
            Skills
          </h4>
        </div>
        <div className="w-100 grid grid-wrapper">
          <div className="left flex column gap-4">
            <div className="w-100 grid grid-auto">
              {newskills.map((x, index) => {
                return (
                  <div
                    className="w-100 card family1 text-grey uppercase"
                    key={x.id}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={index * 250}
                  >
                    {x}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SkillsWrapper id="skills">
      <SkillsLeft />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 5rem 0;
  padding-top: 15rem;
  display: grid;
  place-items: center;
  background-color: #fff;
  background-color: #151315;

  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 4rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    }
    @media (max-width: 580px) {
      grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
      grid-gap: 2rem;
    }
  }
  .text {
  }
  .fs-16 {
    font-size: 15px;
    @media (max-width: 780px) {
      font-size: 14px;
    }
  }
  .fs-20 {
    font-size: 18px;
    font-weight: 900;
  }
  h3 {
    font-weight: 700;
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
  .icon1 {
    filter: brightness(100%);
    width: 35px;
    height: auto;
    transition: all 0.6s ease;
    @media (max-width: 580px) {
      width: 30px;
    }
    &:hover {
      filter: brightness(80%);
    }
  }
  .card {
    position: relative;
    display: grid;
    place-items: center;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    letter-spacing: 3px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 12px;
    @media (max-width: 780px) {
      width: 18rem;
      height: 18rem;
      font-size: 9px;
    }
    @media (max-width: 580px) {
      width: 15rem;
      height: 15rem;
      font-size: 9px;
    }
  }
  .left {
    padding: 4rem 0;
  }
`;