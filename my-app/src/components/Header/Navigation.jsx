import React from "react";
import { Link } from "react-scroll";
import { Link as LinkRout } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul className="navigation">
        <LinkRout to="/" className="navigation__nav">
          <li>Start</li>
        </LinkRout>
        <Link
          className="navigation__nav"
          to="steps1"
          smooth={true}
          duration={1500}
        >
          <li>O co chodzi?</li>
        </Link>
        <Link
          className="navigation__nav"
          to="abautUs"
          smooth={true}
          duration={1500}
        >
          <li>O nas</li>
        </Link>
        <Link
          className="navigation__nav"
          to="whoWeHelp"
          smooth={true}
          duration={1500}
        >
          <li>Fundacje i organizacje</li>
        </Link>
        <Link
          className="navigation__nav"
          to="contact"
          smooth={true}
          duration={1500}
        >
          <li>Kontakt</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
