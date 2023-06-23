import React, { useState } from "react";
import styled from "styled-components";


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
    border-bottom: 1px solid rgba(255,255,255,.09);
    @media (max-width: 780px) {
      font-size: 65px;
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
