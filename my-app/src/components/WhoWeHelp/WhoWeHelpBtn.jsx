import React from "react";
import { Link } from "react-router-dom";

const WhoWeHelpBtn = () => {
  return (
    <div className="whoWeHelpBtn">
      <Link className="whoWeHelpBtn__style">Fundacjom</Link>
      <Link className="whoWeHelpBtn__style">Organizacom pozarządowym</Link>
      <Link className="whoWeHelpBtn__style">Lokalnym zbiórkom</Link>
    </div>
  );
};
export default WhoWeHelpBtn;
