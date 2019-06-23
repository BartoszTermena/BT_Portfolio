import React from "react";
import Background from "./layout/Background";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Background />
      <div className="plain-text">
        <h1>Hello, my name is Bartosz Termena.</h1>
        <h3>I am a Designer / Front End Developer living in Warsaw.</h3>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
