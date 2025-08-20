import React from "react";
import "../styles/extracurricularHero.css";

const ExtracurricularHero = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="extracurricular__hero"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="extracurricular-hero__overlay">
        <div className="extracurricular-hero__container">
          <div className="extracurricular-hero__content">
            <h1 className="extracurricular-hero__title">{title}</h1>
            <div className="extracurricular-hero__subtitle-group">
              <p className="extracurricular-hero__subtitle">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularHero;
