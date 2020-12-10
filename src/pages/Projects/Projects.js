import React from "react";
import "./Projects.modules.scss";
import Blockquote from "../../components/Blockquote/Blockquote";
import ecommerceWebAppImage from "../../images/Ecommerce-WebApp.PNG";
import coronaTrackerAppImage from "../../images/Corona-TrackerApp.PNG";

const Projects = () => {
  return (
    <div className="text">
      <h1>
        <span>Pro</span>jects
      </h1>
      <div className="projectPage">
        <Blockquote
          name="Ecommerce WebApp"
          image={ecommerceWebAppImage}
          description="MongoDB | Express | React | NodeJs"
          url="https://tshirts-mern.herokuapp.com/"
        />
        <Blockquote
          name="Covid-19 Tracker"
          image={coronaTrackerAppImage}
          description="React | Material UI | Hooks | Chart.js"
          url=""
        />
      </div>
    </div>
  );
};

export default Projects;
