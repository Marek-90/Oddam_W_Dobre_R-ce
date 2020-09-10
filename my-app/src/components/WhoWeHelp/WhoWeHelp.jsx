import React from "react";
import WhoWeHelpBtn from "./WhoWeHelpBtn";
import Decoration from "../../assets/Decoration.svg";

const WhoWeHelp = () => {
  return (
    <div className="whoWeHelp" id="whoWeHelp">
      <h2>Komu Pomagamy?</h2>
      <img className="goHelp__img" src={Decoration} alt="Decoration" />
      <WhoWeHelpBtn />
    </div>
  );
};

export default WhoWeHelp;
