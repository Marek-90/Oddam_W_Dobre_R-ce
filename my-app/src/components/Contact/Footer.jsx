import React from "react";
import Fb from "../../assets/Facebook.svg";
import Ins from "../../assets/Instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div></div>
      <div>Copyright by Coders Lab</div>
      <div>
        <img src={Fb} alt="facebook" />
        <img src={Ins} alt="instagram" />
      </div>
    </div>
  );
};

export default Footer;
