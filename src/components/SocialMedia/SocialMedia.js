import React from "react";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="socialmedia">
      <ul>
        <li>
          <a href="/">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
