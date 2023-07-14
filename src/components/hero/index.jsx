import React from "react";
import styled from "styled-components";
export default function HeroIndex() {
  return (
    <WorkWrapper>
      <div className="w-85 auto">
        <div className="w-100 hero">
          <div className="left w-100 h-100 flex justify-center item-center column gap-2">
            <div className="hidden">
              {" "}
              <h4 id="text" className="herotext">
                Edidiong Essien
              </h4>
            </div>
            <div className="flex textwrapper w-100 hidden column">
              <div className="flex column">
                <div className="hidden">
                  <h2 className="text-grey text1 family3 uppercase hidden text-center">Making</h2>
                </div>
                <div className="hidden">
                  {" "}
                  <h2 className="text-grey text1 family3 uppercase hidden text-center">
                    <span className="text-secondary">good</span>
                  </h2>
                </div>{" "}
                <div className="hidden">
                  {" "}
                  <h2 className="text-grey text1 family3 uppercase hidden text-center">
                    <span className="text-secondary"> stuffs</span>
                  </h2>
                </div>
                <div className="hidden">
                  <h2 className="text-grey text1 family3 uppercase hidden text-center">
                    a reality
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
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

  .char {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    transform: translateY(300px);
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
    font-size: 12rem;
    line-height: 110px;
    font-weight: normal;
    width: 50%;
    margin: 0 auto;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    /* transition: all .5s; */

    @media (max-width: 1180px) {
      line-height: 110px;
      width: 90%;
    }
    @media (max-width: 980px) {
      line-height: 100px;
      width: 90%;
    }

    @media (max-width: 780px) {
      line-height: 100px;
    }
    @media (max-width: 590px) {
      line-height: 80px;
      font-size: 11rem;
      width: 90%;
    }
    @media (max-width: 390px) {
      line-height: 70px;
      font-size: 9.8rem;
      width: 100%;
      font-weight: normal;
    }
  }
`;
