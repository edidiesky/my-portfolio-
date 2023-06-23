import React, { useState } from "react";
import styled from "styled-components";
import { Head } from "../common";
import Input from "../forms/Input";
import { BiChevronRight } from "react-icons/bi";

export default function AboutMeIndex() {
  return (
    <SkillsWrapper id="about">
      <div className="imageWrapper"></div>
      <div className="imagegradient"></div>
      <div className="left w-85 auto h-100 flex column gap-1">
        <div className="w-100">
          <h4
            style={{ fontWeight: "normal" }}
            className=" text-white text-start"
          >
            About Me
          </h4>
        </div>
        <div className="w-100">
          <h2 className="family1 fs-60 text-extra-bold text-grey">
            I am a <span className="text-secondary">selectively skilled</span> product designer with strong focus on producing high quality
            & impactful product experience
          </h2>
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
  padding: 10rem 0;
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
  .left {
    z-index: 300;
    display: grid;
    place-items: center;
  }
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    grid-gap: 4rem;
    grid-row-gap: 6rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      grid-row-gap: 6rem;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
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
  .card {
    .top {
      h3 {
        font-size: 30px;
        font-weight: normal;
      }
    }
    &:hover {
      h4 {
        color: var(--secondary);
      }
      .icon1 {
        filter: brightness(80%);
      }
    }
  }
  h4 {
    font-weight: 300;
    line-height: 1.7;
    transition: all 0.6s ease;
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
