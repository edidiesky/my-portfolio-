import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const newFooter = [
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

export default function Footer() {
  const FooterLeft = () => {
    return (
      <div className="left w-85 auto h-100 flex column gap-1">
        <div className="w-100 auto">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-grey family1 flex item-center gap-2"
          >
            <img
              src="https://v2.brittanychiang.com/img/icons/settings.png"
              alt=""
              className="icon1"
            />
            Connect
          </h4>
        </div>
        <div className="w-100 grid grid-wrapper">
          <div className="left flex column gap-4">
            <div className="w-100 grid grid-auto">
              <ul className="flex column gap-1">
                <li className="fs-24 text-grey">Github</li>
                <li className="fs-24 text-grey">Linkedlin</li>
              </ul>
              <ul className="flex column gap-1">
                <li className="fs-24 text-grey">Twitter</li>
                <li className="fs-24 text-grey">Facebook</li>
              </ul>
              <ul className="flex column gap-3">
                <li className="fs-12 text-bold family2 text-grey">
                  Email
                  <span className="fs-10 block family2 text-grey2">
                    essienedidiong1000@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <FooterWrapper id="Footer">
      <FooterLeft />
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 2rem 0;
  padding-top: 15rem;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  @media (max-width: 780px) {
  padding-top: 5rem;
      font-size: 14px;
    }

  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 4rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
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
