import React, { useState } from "react";
import styled from "styled-components";
import TextIndex from "../common/Text";

const whatIdoData = [
  "Responsive design",
  "Api development",
  "Motion",
  "Maintainable Codebase",
];

export default function AboutIndex() {
  return (
    <SkillsWrapper id="about">
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-grey family1 text-start flex item-center gap-2"
          >
            <img
              src="https://v2.brittanychiang.com/img/icons/settings.png"
              alt=""
              className="icon1"
            />
            What I Do
          </h4>
        </div>
        <div className="w-100 grid">
          <div className="left flex item-start column">
            {whatIdoData.map((x, index) => {
              return (
                <div className="w-100 hidden">
                  <h2
                    key={index}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={index * 250}
                    className="fs-60 py-1 text-grey family1 text-start"
                  >
                    <TextIndex x={x} />
                  </h2>
                </div>
              );
            })}
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
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
