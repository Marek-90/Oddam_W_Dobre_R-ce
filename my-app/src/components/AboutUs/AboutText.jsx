import React from "react";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";

const AboutText = () => {
  return (
    <div className="aboutText">
      <h2 className="aboutText__title">O nas</h2>
      <img src={Decoration} alt="Decoration" />
      <div className="aboutText__text">
        Nori grape beet broccoli kombu beet greens fava bean potato quandonge
        celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip
        greens parsnip.
      </div>
      <img className="aboutText__signature" src={Signature} alt="Signature" />
    </div>
  );
};
export default AboutText;
