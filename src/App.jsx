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
  // useEffect(() => {
  //   new SplitType("#herotext1");
  //   setTimeout(updateCounter, 18);
  //   gsap
  //     .timeline()
  //     .to(".counter", {
  //       delay: 0.2,
  //       duration: 6,
  //       ease: "expo.inOut",
  //     })
  //     .to(".counter", {
  //       delay: 0.2,
  //       duration: 1,
  //       opacity: 0,
  //       visibility: "hidden",
  //       ease: "expo.inOut",
  //     })
  //     .to(".bar", {
  //       height: 0,
  //       delay: 0.1,
  //       duration: 0.5,
  //       stagger: {
  //         amount: 0.5,
  //       },
  //       ease: "power1.out",
  //     })
  //     .to(".overlay", {
  //       delay: 0.2,
  //       duration: 1,
  //       opacity: 0,
  //       visibility: "hidden",
  //       ease: "expo.inOut",
  //     })
  //     .to(".word", {
  //       delay: 1,
  //       duration: 1.2,
  //       transform: "none",
  //       opacity: 1,
  //       stagger: {
  //         amount: 1,
  //       },
  //     });

  //   AOS.init({
  //     once: true,
  //   });
  // }, [setCount, count]);

  useEffect(() => {


    AOS.init({
      once: true,
    });
  }, []);
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      <Cursor/>
      {/* <h1 ref={counterref} className="counter text-white">
        {count}
      </h1>
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
      </div> */}
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
    </div>
  );
}
