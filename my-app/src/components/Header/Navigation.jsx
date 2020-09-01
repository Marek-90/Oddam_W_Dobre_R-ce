import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <Link className="navigation__nav">
          <li>Start</li>
        </Link>
        <Link className="navigation__nav">
          <li>O co chodzi?</li>
        </Link>
        <Link className="navigation__nav">
          <li>O nas</li>
        </Link>
        <Link className="navigation__nav">
          <li>Fundacje i organizacje</li>
        </Link>
        <Link className="navigation__nav">
          <li>Kontakt</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
