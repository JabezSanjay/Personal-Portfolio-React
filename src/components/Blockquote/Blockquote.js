import React from "react";
import "./Blockquote.modules.scss";
import { ExternalLink } from "react-external-link";

const Blockquote = (props) => {
  let projectName = props.name;
  let projectDescription = props.description;
  let projectImage = props.image;
  let projectUrl = props.url;

  return (
    <div>
      <ExternalLink href={projectUrl}>
        <div className="box">
          <div className="text">
            <div>
              <h3>{projectName}</h3>
              <img src={projectImage} alt="" />
              <p>{projectDescription}</p>
            </div>
          </div>
        </div>
      </ExternalLink>
    </div>
  );
};

export default Blockquote;
