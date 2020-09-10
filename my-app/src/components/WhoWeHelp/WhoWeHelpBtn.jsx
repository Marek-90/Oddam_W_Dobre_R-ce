import React, { useState } from "react";
import Foundations from "./Foundations";
import Organizations from "./Organizations";
import Collections from "./Collections";

const WhoWeHelpBtn = () => {
  const [activeBoard, setActiveBoard] = useState("fundactions");

  const handleClick = (toogle) => {
    setActiveBoard(toogle);
  };

  const switchContent = () => {
    switch (activeBoard) {
      case "fundactions":
        return <Foundations />;
      case "organizacions":
        return <Organizations />;
      case "collections":
        return <Collections />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="whoWeHelpBtn">
        <button
          onClick={() => handleClick("fundactions")}
          className="whoWeHelpBtn__style"
        >
          Fundacjom
        </button>
        <button
          onClick={() => handleClick("organizacions")}
          className="whoWeHelpBtn__style"
        >
          Organizacom pozarządowym
        </button>
        <button
          onClick={() => handleClick("collections")}
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
