import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MyWork from "./components/pages/MyWork";
import Dashboard from "./components/Dashboard";
import Menu from "./components/layout/SlideMenu";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Menu title="Home" />
        <div className="layout">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/mywork" component={MyWork} />
          </Switch>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
