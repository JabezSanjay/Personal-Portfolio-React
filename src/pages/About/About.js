import React from "react";
import "./About.modules.scss";
// import Express from "../../images/express.svg";
// import MongoDB from "../../images/mongodb.svg";
// import ReactJs from "../../images/react.svg";
// import NodeJs from "../../images/nodejs.svg";
// import Sass from "../../images/sass.svg";
// import Git from "../../images/git.svg";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="head">
        <h2 id="aboutHead">
          My <span> Expertise</span>
        </h2>
        <p className="aboutPara">My skill means a world to me!</p>
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
