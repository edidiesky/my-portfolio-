import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HeroIndex() {
  const WorkLeft = () => {
    return (
      <div className="w-100 hero">
        <div className="left w-100 h-100 flex justify-center item-center column gap-2">
          <h4 className="herotext">Edidiong Essien</h4>
          <div className="flex textwrapper w-100 column">
            <h2 className="text-grey herotext hidden text-center">
              Making{" "}
              <span className="text-secondary">
                good stuffs
              </span>{" "}
              a reality
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <WorkWrapper>
      <div className="w-85 auto flex item-center gap-6 justify-space">
        <WorkLeft />
      </div>
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  background-color: #151315;
  width: 100%;
  padding: 8rem 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  @media (max-width: 780px) {
    padding: 8rem 0;
  }
  .social {
    opacity: 0;
  }
  .content {
    width: 19rem;
    height: 25rem;
  }
  .wrapperlink {
    padding-top: 5rem;
  }
  h2 {
    font-size: 15rem;
    line-height: 130px;
    font-weight: normal;
    width: 50%;
    margin: 0 auto;
    @media (max-width: 980px) {
      line-height: 100px;
      font-size: 14rem;
      width: 70%;
    }

    @media (max-width: 780px) {
      line-height: 100px;
      font-size: 14rem;
    }
    @media (max-width: 590px) {
      line-height: 90px;
      font-size: 13rem;
      width: 90%;
    }
    @media (max-width: 390px) {
      line-height: 85px;
      font-size: 11rem;
      width: 100%;
    }
  }
`;
