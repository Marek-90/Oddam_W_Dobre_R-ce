import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
