/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./WaterFlowButton.scss";
import * as Scroll from "react-scroll";

const WaterFlowButton = () => {
  const scrollToProjects = () => {
    Scroll.animateScroll.scrollTo(1950);
  };
  return (
    <div>
      <div id="button" onClick={scrollToProjects}>
        <a>
          <span>Projects</span>
          <div className="liquid-button"></div>
        </a>
      </div>
    </div>
  );
};

export default WaterFlowButton;
