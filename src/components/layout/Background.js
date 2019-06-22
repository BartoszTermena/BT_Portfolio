import React from "react";
import circle_medium from "./images/circle-medium.svg";
import circle_medium_md from "./images/circle-medium-md.svg";
import circle_large_md from "./images/circle-large-md.svg";
import circle_large from "./images/circle-large.svg";

const Background = () => {
  return (
    <div>
      <img src={circle_large} alt="circle" className="circle-large" />
      <img src={circle_large_md} alt="circle" className="circle-large-md" />
      <img src={circle_medium} alt="circle" className="circle-medium" />
      <img src={circle_medium_md} alt="circle" className="circle-medium-md" />
    </div>
  );
};

export default Background;
