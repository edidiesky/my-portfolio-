import React, { useState } from "react";
import styled from "styled-components";
import { Head } from "../common";
import Input from "../forms/Input";
import { BiChevronRight } from "react-icons/bi";
import TextIndex from "../common/Text";

export default function AboutMeIndex() {
  return (
    <SkillsWrapper id="about">
      {/* <div className="imageWrapper">
        <img
          src="https://minhpham.design/assets/images/planet-1-1.png"
          className="w-100 h-100"
          alt=""
        />
      </div> */}
      <div className="left w-85 auto h-100 flex column gap-2">
        <div className="w-100">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-grey family1 text-start flex item-center gap-2"
          >
            <img
              alt=""
              className="icon1"
              src="https://v2.brittanychiang.com/img/icons/light-bulb.png"
            />
            About Me
          </h4>
        </div>
        <div className="w-100">
          <h2 className="family1 fs-60 text-extra-bold text-grey">
            <TextIndex
              x={
                "  I am a full stack web developer with a keen focus to produce high quality product and an impactful user experience"
              }
            />
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
  /* background-color: rgb(13, 13, 13); */
  min-height: 100vh;
  .line .span {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(13, 13, 13, 0.852);
    
  }
  .imageWrapper > img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 65px;
    @media (max-width: 980px) {
      font-size: 4.8rem;
    }
    @media (max-width: 380px) {
      font-size: 4rem;
    }
  }

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
