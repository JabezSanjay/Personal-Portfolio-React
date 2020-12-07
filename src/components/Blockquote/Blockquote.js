import React from "react";
import "./Blockquote.modules.scss";

const Blockquote = (props) => {
  let projectName = props.name;
  let projectDescription = props.description;
  let projectImage = props.image;

  return (
    <div>
      <div className="box">
        <div className="text">
          <div>
            <h3>{projectName}</h3>
            <img src={projectImage} alt="" />
            <p>{projectDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockquote;
