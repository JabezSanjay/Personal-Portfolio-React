import React from "react";
import "./Navbar.modules.scss";

const navbar = () => {
  const logoLetters = [
    "J",
    "A",
    "B",
    "E",
    "",
    "Z",
    "S",
    "A",
    "N",
    "J",
    "A",
    "Y",
  ];
  return (
    <div>
      <div className="wavy">
        {logoLetters.map((letter, index) => {
          return <span>{letter}</span>;
        })}
      </div>
    </div>
  );
};

export default navbar;
