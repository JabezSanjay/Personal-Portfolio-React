import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import WaterFlowButton from "../../components/Buttons/WaterFlowButton";
import About from "../About/About";
import "./Home.modules.scss";

const Home = () => {
  const homepageContent = () => {
    return (
      <div className="mainhead">
        <h1 id="main-text">
          <span>I </span> bridge the gap between <span>you</span> and your
          <span> customer</span> using <span>code</span>!
        </h1>
        <h1 id="color-dance-text">
          <span>FullStack </span>Web Developer
        </h1>
      </div>
    );
  };
  return (
    <div>
      <section className="homepage">
        {homepageContent()}
        <Navbar />
        <SocialMedia />
        <WaterFlowButton />
      </section>
      <section>
        <About />
      </section>
    </div>
  );
};

export default Home;
