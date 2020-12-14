/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./SocialMedia.scss";
import { ExternalLink } from "react-external-link";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <ul>
        <li>
          <ExternalLink href="https://github.com/JabezSanjay">
            <a>
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.youtube.com/c/jabezvlogs">
            <a>
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://www.linkedin.com/in/jabezsanjay/">
            <a>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </ExternalLink>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
