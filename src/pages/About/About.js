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
      {/* <h2 className="aboutPage__head">My Expertise</h2>
      <p className="aboutPage__para">My skills mean a world to me</p> */}

      <div class="mernContainer">
        <div class="wrapper">
          <h1 class="text">
            <div class="line">
              <p></p>
              <p>MONGODB</p>
            </div>
            <div class="line">
              <p>MONGODB</p>
              <p>EXPRESS</p>
            </div>
            <div class="line">
              <p>EXPRESS</p>
              <p>REACT</p>
            </div>
            <div class="line last">
              <p>REACT</p>
              <p>NODE</p>
            </div>
            <div class="line first">
              <p>NODE</p>
              <p></p>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
