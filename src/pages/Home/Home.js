import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import "./Home.modules.scss";

const Home = () => {
  return (
    <div className="homepage">
      <Navbar />
      <SocialMedia />
    </div>
  );
};

export default Home;
