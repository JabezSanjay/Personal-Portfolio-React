import React from "react";
import "./About.modules.scss";
import AboutIllustration from "../../images/about_illus.svg";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="head">
        <h2 id="aboutHead">
          My <span> Expertise</span>
        </h2>
        <img src={AboutIllustration} alt="My skill means a lot to me!" />
      </div>

      <div className="mernContainer">
        <div className="wrapper">
          <h1 className="text">
            <div className="line">
              <p>MongoDB</p>
            </div>
            <div className="line">
              <p>EXPRESS</p>
            </div>
            <div className="line">
              <p>REACT</p>
            </div>
            <div className="line last">
              <p>NODE</p>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
