import React from "react";
import Login from "./Login";
import Navigation from "./Navigation";
import GoHelp from "./GoHelp";

const NavLog = () => {
  return (
    <div className="navLog">
      <Login />
      <Navigation />
      <GoHelp />
    </div>
  );
};

export default NavLog;
