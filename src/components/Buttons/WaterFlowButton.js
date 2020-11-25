import React from "react";
import "./WaterFlowButton.scss";

const WaterFlowButton = () => {
  return (
    <div>
      <div id="button">
        <a href="/projects">
          <span>Projects</span>
          <div className="liquid-button"></div>
        </a>
      </div>
    </div>
  );
};

export default WaterFlowButton;
