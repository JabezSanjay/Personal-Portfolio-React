import React from "react";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div class="socialmedia">
      <ul>
        <li>
          <a href="/">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa fa-youtube" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
