import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <div className="logo-container">Logo</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="#">
                Specs
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Products
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
