import React, { Fragment } from "react";
import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Background />
      <div className="layout">
        <Navbar />
        <Dashboard />
      </div>
    </Fragment>
  );
}

export default App;
