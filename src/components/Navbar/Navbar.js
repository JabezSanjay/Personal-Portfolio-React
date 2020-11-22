import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Navbar.modules.scss";

const Navbar = ({ history }) => {
  const [navbar, setNavbar] = useState(false);

  const navbarClicked = () => {
    setNavbar(!navbar);
  };
  const navbarComponent = () => {
    return (
      <header className="header">
        <nav className="navbar">
          <h1 className="navbar__logo">T-Shirts</h1>
          <ul
            className={
              navbar ? "navbar__links navbar--active" : "navbar__links"
            }
          >
            <li>
              <Link to="/" onClick={navbarClicked}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/cart" onClick={navbarClicked}>
                Cart
              </Link>
            </li>
          </ul>
          <div
            className={navbar ? "hamburger-menu bar-change" : "hamburger-menu"}
            onClick={navbarClicked}
          >
            <div className="bar1">-----</div>
          </div>
        </nav>
      </header>
    );
  };
  return <div>{navbarComponent()}</div>;
};

export default withRouter(Navbar);
