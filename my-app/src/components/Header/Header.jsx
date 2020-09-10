import React from "react";
import NavPhoto from "./NavPhoto";
import NavLog from "./NavLog";

const Header = () => {
  return (
    <header className="header">
      <NavPhoto />
      <NavLog />
    </header>
  );
};

export default Header;
