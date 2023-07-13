import React from "react";
import styled from "styled-components";

export default function Footer() {
  const FooterLeft = () => {
    return (
      <div className="left w-90 auto h-100 flex column gap-4">
        <div className="flex item-center w-85 auto">
          <div className="w-100 flex column gap-2">
            <h2 className="text-grey w-100 family1 fs-45">
              Let's start a project together
            </h2>
          </div>
          <div
            className="flex-1 flex justify-end item-center"
            style={{ justifyContent: "flex-end" }}
          >
            {" "}
            <img src="./profile.jpg" alt="" className="image" />
          </div>
        </div>
        <div className="grid_wrapper w-85 auto" style={{ paddingTop: "4rem" }}>
          <div className="flex column gap-2">
            {/* contact form */}
            
          </div>
          {/* contact list */}
          <div className="flex column gap-4">
            <div className="flex column gap-2">
              <h4 className="text-grey" style={{ fontSize: "9px" }}>
                Contact
              </h4>
              <ul className="flex column flex" style={{ gap: "1.5rem" }}>
                <li className="fs-14 text-white family1">essienedidiong1000@gmail.com</li>
                <li className="fs-14 text-white family1">08127107270</li>
              </ul>
            </div>
            <div className="flex column gap-2">
              <h4 className="text-grey" style={{ fontSize: "9px" }}>
                Social
              </h4>
              <ul className="flex column flex" style={{ gap: "1.5rem" }}>
                <li className="fs-14 text-white family1">Instagram</li>
                <li className="fs-14 text-white family1">Facebook</li>
                <li className="fs-14 text-white family1">Github</li>
                <li className="fs-14 text-white family1">Twitter</li>
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
  padding: 15rem 0;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  .grid_wrapper {
    display: grid;
    grid-template-columns: 1fr 10vw;
  }
  @media (max-width: 780px) {
    padding-top: 5rem;
    font-size: 14px;
  }

  .image {
    width: 7rem;
    height: 7rem;
    border-radius: 50%;
  }
  h2 {
    font-weight: light;
    font-size: 70px;
    position: relative;
    .span {
      position: absolute;
      bottom: -100%;
      left: -30%;
    }
  }
`;
