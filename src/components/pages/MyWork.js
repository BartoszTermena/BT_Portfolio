import React, { useState } from "react";
import Background from "../layout/Background";
import work_1 from "../layout/images/work1.png";
import work_2 from "../layout/images/work2.png";
import work_3 from "../layout/images/work3.png";
const MyWork = () => {
  const [pages, setPages] = useState([
    {
      link: "https://tshirt-project.firebaseapp.com/",
      img: work_1,
      title: "",
      content: ""
    },
    {
      link: "https://contact-keeper-b50a2.firebaseapp.com/",
      img: work_2,
      title: "",
      content: ""
    },
    {
        link: "https://vigilant-jennings-615463.netlify.com/",
        img: work_3,
        title: "",
        content: ""
      },
  ]);
  let list = pages.map(page => (
    <div class="card">
      <img src={page.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  ));
  return (
    <div className="my-work container py-5">
      <div class="card-group">{list}</div>
    </div>
  );
};

export default MyWork;
