import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";

const NextStep = () => {
  return (
    <div className="nextStep">
      <StepOne />
      <StepTwo />
      <StepThree />
      <StepFour />
    </div>
  );
};

export default NextStep;
