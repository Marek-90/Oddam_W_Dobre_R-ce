import React from "react";
import Decoration from "../../assets/Decoration.svg";
import NextStep from "./NextStep";

const Steps = () => {
  return (
    <>
      <div className="steps">
        <h2>Wystarczą 4 proste kroki</h2>
        <img className="goHelp__img" src={Decoration} alt="Decoration" />
      </div>
      <NextStep />
    </>
  );
};
export default Steps;
