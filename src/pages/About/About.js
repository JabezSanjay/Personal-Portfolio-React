import React from "react";
import "./About.modules.scss";
import Express from "../../images/express.svg";
import MongoDB from "../../images/mongodb.svg";
import ReactJs from "../../images/react.svg";
import NodeJs from "../../images/nodejs.svg";
import Sass from "../../images/sass.svg";
import Git from "../../images/git.svg";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutPage__letters">
        <h2 className="aboutPage__head">My Expertise</h2>
        <p className="aboutPage__para">My skills mean a world to me</p>
      </div>
      <div className="aboutPage__images">
        <img src={MongoDB} alt="" />
        <img src={Express} alt="" />
        <img src={ReactJs} alt="" />
        <img src={NodeJs} alt="" />
        <img src={Sass} alt="" />
        <img src={Git} alt="" />
      </div>
    </div>
  );
};

export default About;
