import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextIndex from "../common/Text";

const workdata = [
  {
    description:
      "This is a clone of streaming platform. It houses a client side and a server side built with the tools below",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
    ],
    link1: "",
    link2: "https://github.com/edidiesky/airbnb",
    text: "Airbnb",
  },
  {
    description:
      "This is a clone of streaming platform. It houses a client side and a server side built with the tools below",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
    ],
    link1: "",
    link2: "https://github.com/edidiesky/fiverrClone_1-",
    text: "Fiverr",
  },
  {
    description:
      "This is a clone of streaming platform. It houses a client side and a server side built with the tools below",
    tools: [
      "NEXT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "TYPESCRIPT",
    ],
    link1: "",
    link2: "https://github.com/edidiesky/airbnb",
    text: "Youtube",
  },
];

export default function WorkIndex() {
  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;
    const x = e.clientX - target.getBoundingClientRect().left;
    const y = e.clientY - target.getBoundingClientRect().top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  useEffect(() => {
    // get all the cards
    const cards = document.querySelectorAll(".card");
    document.getElementById("cards").onmousemove = (e) => {
      cards.forEach((card) => {
        card.addEventListener("mousemove", handleMouseMove);
      });
    };

    return () => {
      document.getElementById("cards").onmousemove = (e) => {
        cards.forEach((card) => {
          card.removeEventListener("mousemove", handleMouseMove);
        });
      };
    };
  }, []);
  return (
    <SkillsWrapper id="Work">
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100">
          <h4
            style={{ fontWeight: "normal" }}
            className="text-grey family1 text-start flex item-center gap-2"
          >
            <img
              src="https://v2.brittanychiang.com/img/icons/repair-tools.png"
              alt=""
              className="icon1"
            />
            My Works
          </h4>
        </div>
        <div id="cards" className="w-100 grid column gap-2">
          {workdata.map((x, index) => {
            return (
              <div className="card flex item-start column gap-2">
                {/* <img src={x.image} alt="" className="images" /> */}
                <div className="card_content flex py-2 column gap-4">
                  <div className="w-90 auto card_content_wrapper flex column gap-2">
                    <h3 className="fs-30 text-white">{x.text}</h3>
                    <h5 className="fs-14 text-grey family1 text-light ">
                      {x.description}
                    </h5>
                    <div className="flex item-center tagwrapper">
                      {x.tools.map((x, index) => {
                        return (
                          <div
                            key={index}
                            className="btn py-1 family1 uppercase"
                            target="_blank"
                          >
                            {x}
                          </div>
                        );
                      })}
                    </div>
                    <div
                      style={{ flexWrap: "wrap" }}
                      className="w-100 btnWrapper flex item-center gap-1"
                    >
                      {x.link1 ? (
                        <Link
                          to={x.link1}
                          className="btn fs-16 family1 py-1"
                          target="_blank"
                        >
                          View project Demo
                        </Link>
                      ) : (
                        <div
                          className="btn text-grey fs-16 family1 py-1"
                          target="_blank"
                        >
                          Comming Soon
                        </div>
                      )}

                      <Link
                        to={"https://github.com/Vivixell/portfolioVictorRobin"}
                        className="btn text-grey fs-16 family1 py-1"
                        target="_blank"
                      >
                        View project Code
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card_border"></div>

                {/* <img src={x.image} alt="" className="images" /> */}
              </div>
              // <h2
              // //   key={index}
              // //   data-aos="fade-up"
              // //   data-aos-duration="1000"
              // //   data-aos-delay={index * 250}
              // //   className="text-grey w-100 uppercase text-start"
              // // >
              // //   <TextIndex x={x.text} />
              // // </h2>
            );
          })}
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
  .tagwrapper {
    flex-wrap: wrap;
    gap: 0.5rem;
    z-index: 30000;
    .btn {
      padding: 0.5rem 1rem;
      color: #fff;
      font-size: 9px;
      z-index: 30000;
      letter-spacing: 2px;
      &:hover {
        color: var(--dark-1);
      }
      @media (max-width: 480px) {
        font-size: 10px;
      }
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
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  .card {
    min-height: 350px;
    width: 100%;
    position: relative;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.03);
    z-index: 3000;
    /* transform: all 0.6s; */
  }

  #cards:hover > .card > .card_border {
    opacity: 1;
  }
  .card:hover::before {
    opacity: 1;
  }
  .card > .card_content {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background-color: rgb(15, 15, 15);
    border-radius: inherit;
    margin: 1px;
    z-index: 20;
  }
  .card > .card_content {
    background-image: radial-gradient(
      800px circle at 100px 100px,
      rgba(255, 255, 255, 0.06) 100px,
      transparent 40%
    );
  }
  .images {
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 20;
  }
  .card::before,
  .card > .card_border {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    content: "";
    top: 0;
    background-image: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06) 100px,
      transparent 40%
    );
    z-index: 10;
    opacity: 0;
    transition: all 0.5s;
  }
  .btn {
    padding: 0.9rem 1.8rem;
    border-radius: 40px;
    font-size: 10px;
    cursor: pointer;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 3000000;
  }
  .card > .card_border {
    background-image: radial-gradient(
      400px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.1) 100px,
      transparent 40%
    );
    z-index: 10;
  }
  .card_content_wrapper {
    justify-content: flex-end;
    height: 100%;
    padding: 3rem 1rem;
    h3 {
      letter-spacing: 1px;
      font-weight: normal;
      font-size: 50px;
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
    font-size: 120px;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);

    @media (max-width: 980px) {
      font-size: 8rem;
    }
    @media (max-width: 780px) {
      font-size: 60px;
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
