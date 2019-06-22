import React, { Fragment, useState } from "react";
import home from "./images/home.svg";
import HamburgerMenu from "react-hamburger-menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <header>
        <div className="logo-container">
        <HamburgerMenu
					isOpen={open}
					menuClicked={() => handleClick()}
					width={25}
					height={17}
					strokeWidth={2}
					rotate={0}
          color='black'
					borderRadius={0}
					animationDuration={0.5}
				/>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
