import React from "react";
import circle_medium from "./images/circle-medium-closed.svg";
import circle_medium_md from "./images/circle-medium-md.svg";
import circle_large from "./images/circle-large.svg";

const Background = () => {
  return (
    <div className="background">
      <img src={circle_large} alt="circle" className="circle-large" />
      <img src={circle_medium} alt="circle" className="circle-medium" />
      <img src={circle_medium_md} alt="circle" className="circle-medium-md" />
    </div>
  );
};

export default Background;
