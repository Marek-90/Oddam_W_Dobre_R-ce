import React from "react";
import { Link } from "react-router-dom";

const StepBtn = () => {
  return (
    <div className="stepBtn">
      <Link to="/logowanie" className="stepBtn__btn">
        <p>ODDAJ</p>
        <p>RZECZY</p>
      </Link>
    </div>
  );
};

export default StepBtn;
