import React, { Fragment } from "react";
import home from "./images/home.svg";

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <div className="logo-container">
          <img src={home} className="logo" alt="logo"/>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#">
                My Work
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
