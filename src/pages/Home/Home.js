import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import WaterFlowButton from "../../components/Buttons/WaterFlowButton";
import "./Home.modules.scss";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <SocialMedia />
      <WaterFlowButton />
    </div>
  );
};

export default Home;
