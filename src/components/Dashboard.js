import React from "react";
import Typing from "react-typing-animation";
import Background from "./layout/Background";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Background />
      <div className="plain-text">
        <Typing speed={50}>
          <Typing.Delay ms={1000} />
          <h1>Hello, my name is Bartosz Termena.</h1>
          <Typing.Delay ms={1000} />
          <h3>I am a Designer / Front End Developer living in Warsaw.</h3>
        </Typing>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
