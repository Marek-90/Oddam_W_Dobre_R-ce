import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Log from "./components/Logowanie";
import Reg from "./components/Reg";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Log} path="/logowanie" />
          <Route component={Reg} path="/rejestracja" />
        </Switch>
      </Router>
    </>
  );
};
export default App;
