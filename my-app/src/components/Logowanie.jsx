import React from "react";
import Login from "./Header/Login";
import Navigation from "./Header/Navigation";
import LogForm from "./LogRegister/LogForm";

const Log = () => {
  return (
    <>
      <div className="navLog">
        <Login />
        <Navigation />
        <LogForm />
      </div>
    </>
  );
};

export default Log;
