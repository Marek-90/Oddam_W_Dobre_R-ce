import React from "react";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/Icon-1.svg";

const StepOne = () => {
  return (
    <>
      <Link to="/logowanie" className="stepOne">
        <img className="step__img-size" src={Icon1} alt="icon1" />
        <p className="step__title">Wybierz rzeczy</p>
        <p>ubrania,zabawki,</p>
        <p>sprzę i inne</p>
      </Link>
    </>
  );
};

export default StepOne;
