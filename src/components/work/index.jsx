import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const workdata = [
  {
    image: "./jobit.png",
    description:
      "The car dealership website is a platform where buyers who are interested in getting different cars can visit. A payment system using PayPal was integrated for users to carry out payments. The site provides a platform for the admin to view statistics on their sales and product created. Notwithstanding product, user and order management are also accessible for the admin",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "HTML",
    ],
    link1: "",
    link2: "",
    text: "Airbnb",
  },
  {
    image: "./jobit.png",
    description:
      "The car dealership website is a platform where buyers who are interested in getting different cars can visit. A payment system using PayPal was integrated for users to carry out payments. The site provides a platform for the admin to view statistics on their sales and product created. Notwithstanding product, user and order management are also accessible for the admin",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "HTML",
    ],
    link1: "",
    link2: "",
    text: "Fiverr",
  },
  {
    image: "./jobit.png",
    description:
      "The car dealership website is a platform where buyers who are interested in getting different cars can visit. A payment system using PayPal was integrated for users to carry out payments. The site provides a platform for the admin to view statistics on their sales and product created. Notwithstanding product, user and order management are also accessible for the admin",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "HTML",
    ],
    link1: "",
    link2: "",
    text: "Airbnb",
  },
  {
    image: "./jobit.png",
    description:
      "The car dealership website is a platform where buyers who are interested in getting different cars can visit. A payment system using PayPal was integrated for users to carry out payments. The site provides a platform for the admin to view statistics on their sales and product created. Notwithstanding product, user and order management are also accessible for the admin",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "HTML",
    ],
    link1: "",
    link2: "",
    text: "Car Dealer",
  },
  {
    image: "./jobit.png",
    description:
      "The car dealership website is a platform where buyers who are interested in getting different cars can visit. A payment system using PayPal was integrated for users to carry out payments. The site provides a platform for the admin to view statistics on their sales and product created. Notwithstanding product, user and order management are also accessible for the admin",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "HTML",
    ],
    link1: "",
    link2: "",
    text: "Youtube",
  },
  {
    image: "./jobit.png",
    description:
      "The car dealership website is a platform where buyers who are interested in getting different cars can visit. A payment system using PayPal was integrated for users to carry out payments. The site provides a platform for the admin to view statistics on their sales and product created. Notwithstanding product, user and order management are also accessible for the admin",
    tools: [
      "REACT.JS",
      "CSS",
      "styled-components",
      "NODEJS",
      "EXPRESSJS",
      "MONGODB",
      "HTML",
    ],
    link1: "",
    link2: "",
    text: "Airbnb",
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
        <div id="cards" className="w-100 grid">
          {workdata.map((x, index) => {
            return (
              <div className="card flex item-start column gap-2">
                {/* <img src={x.image} alt="" className="images" /> */}
                <div className="card_content flex py-2 column gap-4">
                  <div className="w-90 auto card_content_wrapper flex column gap-2">
                    <h3 className="fs-30 text-white">{x.text}</h3>
                    <div className="flex item-center tagwrapper">
                      <div className="btn fs-14 family2 py-1" target="_blank">
                        Reactjs
                      </div>{" "}
                      <div className="btn fs-14 family2 py-1" target="_blank">
                        Reactjs
                      </div>{" "}
                      <div className="btn fs-14 family2 py-1" target="_blank">
                        Reactjs
                      </div>{" "}
                      <div className="btn fs-14 family2 py-1" target="_blank">
                        Reactjs
                      </div>{" "}
                      <div className="btn fs-14 family2 py-1" target="_blank">
                        Reactjs
                      </div>
                    </div>
                    <div className="w-100 btnWrapper flex item-center gap-1">
                      {x.link1 ? (
                        <Link
                          to={x.link1}
                          className="btn fs-14 family2 py-1"
                          target="_blank"
                        >
                          View project Demo
                        </Link>
                      ) : (
                        <div
                          className="btn text-grey fs-10 family2 py-1"
                          target="_blank"
                        >
                          Comming Soon
                        </div>
                      )}

                      <Link
                        to={"https://github.com/Vivixell/portfolioVictorRobin"}
                        className="btn text-grey fs-10 family2 py-1"
                        target="_blank"
                      >
                        View project Code
                      </Link>
                    </div>
                    {/* <p className="family2 text-grey fs-10 text-light">{x.description}</p> */}
                  </div>
                </div>
                <div className="card_border"></div>

                {/* <img src={x.image} alt="" className="images" /> */}
              </div>
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
    .btn {
      padding: 0.5rem 1rem;
      color:var(--grey-1);
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
    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  .card {
    min-height: 280px;
    width: 100%;
    position: relative;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.03);
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
  .card:nth-child(1) > .card_content {
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
    z-index: 30;
    opacity: 0;
    transition: all 0.5s;
  }
  .btn {
    padding: 0.9rem 1.8rem;
    border-radius: 40px;
    font-size: 9px;
    cursor: pointer;
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.09);
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
