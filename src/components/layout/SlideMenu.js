import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./slidemenu.css";

const MenuLinks = props => {
  const [Initlinks, setLinks] = useState([
    {
      text: "my work",
      link: "#mywork",
      icon: "fa-laptop"
    },
    {
      text: "github",
      link: "https://github.com/BartoszTermena",
      icon: "fa-github"
    },
    {
      text: "stackoverflow",
      link: "https://stackoverflow.com/users/10628286/bartosztermena",
      icon: "fa-stack-overflow"
    },
    {
      text: "linkedin",
      link: "https://www.linkedin.com/feed/",
      icon: "fa-linkedin"
    }
  ]);
  let links = Initlinks.map((link, i) => (
    <li>
      <i aria-hidden="true" className={`fa ${link.icon}`} />
      {link.link === "#mywork" ? (
        <Link to="mywork">my work</Link>
      ) : (
        <a href={link.link} target="_blank">
          {link.text}
        </a>
      )}
    </li>
  ));

  return (
    <div className={props.menuStatus} id="menu">
      <ul>{links}</ul>
    </div>
  );
};

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const _menuToggle = () => {
    setIsOpen(!isOpen);
  };
  const _close = () => {
    setIsOpen(false)
  }
  let menuStatus = isOpen ? "isopen" : "";

  return (
    <div>
      <div className="menubar">
        <div className="hambclicker" onClick={() => _menuToggle()} />
        <div id="hambmenu" className={menuStatus}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="title">
          <span>
            {" "}
            <Link onClick={() => _close()}style={{ textDecoration: 'none', color: 'white' }} to="/">{props.title}</Link>
          </span>
        </div>
      </div>
      <MenuLinks menuStatus={menuStatus} />
    </div>
  );
};

export default Menu;
