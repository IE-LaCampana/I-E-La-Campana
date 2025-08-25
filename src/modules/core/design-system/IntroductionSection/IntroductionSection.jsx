import React from "react";
import "./IntroductionSection.css";


const IntroductionSection = ({title, description, image}) => {
  return (
    <section className="intruduction-section__container">
      <div className="introduction-section__content">
        <div className="introduction-section__text-content">
          <h1 className="introduction-section__title">{title}</h1>
          <div className="introduction-section__description">
            <p className="introduction-section__paragraph">{description}</p>
          </div>
        </div>
        <div className="introduction-section__image-wrapper">
          <img src={image} alt="" className="introduction-section__image" />
        </div>
      </div>
    </section>
  );
}

export default IntroductionSection






