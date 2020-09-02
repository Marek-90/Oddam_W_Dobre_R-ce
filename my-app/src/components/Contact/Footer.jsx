import React from "react";
import Fb from "../../assets/Facebook.svg";
import Ins from "../../assets/Instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div></div>
      <div>Copyright by Coders Lab</div>
      <div>
        <div>
          <img className="footer__img1" src={Fb} alt="facebook" />
          <img className="footer__img2" src={Ins} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
