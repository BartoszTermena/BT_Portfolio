import React, { useState } from "react";
import work_1 from "../layout/images/work1.png";
import work_2 from "../layout/images/work2.png";
import work_3 from "../layout/images/work3.png";
import work_4 from "../layout/images/work4.png";
const MyWork = () => {
  const [pages, setPages] = useState([
    {
      link: "https://tshirt-project.firebaseapp.com/",
      github: "https://github.com/BartoszTermena/Tshirt-Project",
      img: work_1,
      title: "Tshirt Creator",
      content: ""
    },
    {
      link: "https://contact-keeper-b50a2.firebaseapp.com/",
      github: "https://github.com/BartoszTermena/Contact-Keeper_ReactJS",
      img: work_2,
      title: "Contact Keeper",
      content: ""
    },
    {
      link: "https://vigilant-jennings-615463.netlify.com/",
      github: "https://github.com/BartoszTermena/Admin_Template",
      img: work_3,
      title: "Admin Dashboard View",
      content: ""
    },
    {
      link: "https://gatsby-coffee-shop-project.netlify.com/",
      github: "https://github.com/BartoszTermena/Coffee_Shop_GatsbyJS",
      img: work_4,
      title: "Cooffee Shop",
      content: ""
    }
  ]);
  let list = pages.map(page => (
    <div class="card">
      <h5 class="card-title">{page.title}</h5>
      <img src={page.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <a href={page.github} target="_blank">
            <i className="fa fa-github link-icon" />
          </a>
        </p>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <div className="my-work container py-5">
        <div>{list}</div>
      </div>
    </React.Fragment>
  );
};

export default MyWork;
