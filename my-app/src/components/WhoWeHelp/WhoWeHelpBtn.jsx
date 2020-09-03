import React, { useState } from "react";
import Foundations from "./Foundations";
import Organizations from "./Organizations";
import Collections from "./Collections";

const Active = {
  fundactions: "fundations",
  organizacions: "organizacions",
  collections: "collections",
};

const WhoWeHelpBtn = () => {
  const [activeBoard, setActiveBoard] = useState(Active.fundactions);

  const handleClick = (toogle) => {
    setActiveBoard(toogle);
  };

  const switchContent = () => {
    switch (activeBoard) {
      case Active.fundactions:
        return <Foundations />;
      case Active.organizacions:
        return <Organizations />;
      case Active.collections:
        return <Collections />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="whoWeHelpBtn">
        <button
          onClick={() => handleClick(Active.fundactions)}
          className="whoWeHelpBtn__style"
        >
          Fundacjom
        </button>
        <button
          onClick={() => handleClick(Active.organizacions)}
          className="whoWeHelpBtn__style"
        >
          Organizacom pozarządowym
        </button>
        <button
          onClick={() => handleClick(Active.collections)}
          className="whoWeHelpBtn__style"
        >
          Lokalnym zbiórkom
        </button>
      </div>
      {switchContent()}
    </>
  );
};
export default WhoWeHelpBtn;
