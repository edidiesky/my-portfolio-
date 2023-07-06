import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SplitType from "split-type";
import "pace-js/themes/yellow/pace-theme-minimal.css";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Layout } from "./screens";
import Cursor from "./components/common/cursor";
import HeroIndex from "./components/hero";

export default function App() {
  const [count, setCount] = useState(0);
  const counterref = useRef();
  const updateCounter = () => {
    // check if the counter is up to 100
    if (count === 100) {
      return;
    } else {
      // const newcount = Math.floo
      setCount(count + 1);
    }
  };

  useEffect(() => {
    const mytext = new SplitType("#text");
    gsap
      .timeline()
      // .to(".counter", {
      //   delay: 0.2,
      //   duration: 6,
      //   ease: "expo.inOut",
      // })
      // .to(".counter", {
      //   delay: 0.2,
      //   duration: 1,
      //   opacity: 0,
      //   visibility: "hidden",
      //   ease: "expo.inOut",
      // })
      .to(".bar", {
        height: '126vh',
        delay: 0.8,
        duration: 0.9,
        ease: "easeOutExpo",
        stagger: {
          amount: 0.5,
        },
      })
      .to(".overlay", {
        delay: 1,
        duration: 1.2,
        opacity: 0,
        visibility: "hidden",
        ease: "easeOutExpo",
      })

      .fromTo(
        ".text1",
        { skewY: 50, y: 480 }, // Initial skewY value
        {
          skewY: 0,
          y: 0,
          duration: 1,
          delay: 1,
          // ease: "elastic.out(1, 0.5)",
          ease: "easeOutExpo",
          stagger: {
            amount: 0.5,
          },
        }
      )
      .to(".char", {
        y: 0,
        delay: .4,
        duration: 1.7,
        ease: "easeOutExpo",
        stagger: {
          amount: 0.5,
        },
      }); // Final skewY value and duration);
    AOS.init({
      once: true,
      duration: 4000,
    });
  }, []);
  const [height, setHeight] = useState(0);
  return (
    <div className="based" style={{ height }}>
      <Cursor />
      {/* <h1 ref={counterref} className="counter text-white">
        {count}
      </h1> */}
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
      {/* <HeroIndex /> */}
    </div>
  );
}
