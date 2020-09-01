import React from "react";
import { Link } from "react-router-dom";
import Icon2 from "../../assets/Icon-2.svg";

const StepTwo = () => {
  return (
    <>
      <Link to="/logowanie" className="stepOne">
        <img src={Icon2} alt="icon2" />
        <p className="step__title">Spakuj je</p>
        <p>skorzystaj z</p>
        <p>worków na śmieci</p>
      </Link>
    </>
  );
};
export default StepTwo;
