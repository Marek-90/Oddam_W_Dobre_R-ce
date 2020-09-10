import React from "react";
import { Link } from "react-router-dom";
import Icon4 from "../../assets/Icon-4.svg";

const StepFour = () => {
  return (
    <>
      <Link to="/logowanie" className="stepOne">
        <img className="step__img-size" src={Icon4} alt="icon4" />
        <p className="step__title">Zamów kuriera</p>
        <p>kurier przyjedzie</p>
        <p>w dogodnym terminie</p>
      </Link>
    </>
  );
};

export default StepFour;
