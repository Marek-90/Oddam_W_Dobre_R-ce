import React from "react";
import Decoration from "../../assets/Decoration.svg";
import NextStep from "./NextStep";
import StepBtn from "./StepBtn";

const Steps = () => {
  return (
    <>
      <div className="steps" id="steps1">
        <h2>Wystarczą 4 proste kroki</h2>
        <img className="goHelp__img" src={Decoration} alt="Decoration" />
      </div>
      <NextStep />
      <StepBtn />
    </>
  );
};

export default Steps;
