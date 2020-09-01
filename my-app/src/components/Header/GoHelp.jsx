import React from "react";
import Decoration from "../../assets/Decoration.svg";

const GoHelp = () => {
  return (
    <div className="goHelp">
      <div className="goHelp__position">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
        <img className="goHelp__img" src={Decoration} alt="Decoration" />
        <div className="goHelp__btn">
          <button>ODDAJ RZECZY</button>
          <button>ZORGANIZUJ ZBIÓRKĘ</button>
        </div>
      </div>
    </div>
  );
};

export default GoHelp;
