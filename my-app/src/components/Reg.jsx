import React from "react";
import Login from "./Header/Login";
import Navigation from "./Header/Navigation";
import Register from "./LogRegister/Register";

const Reg = () => {
  return (
    <div className="navLog">
      <Login />
      <Navigation />
      <Register />
    </div>
  );
};

export default Reg;
