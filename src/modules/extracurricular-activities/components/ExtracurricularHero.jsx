import React from "react";
import "../styles/extracurricularHero.css";
import { css } from "jquery";

const ExtracurricularHero = ({ title, description }) => {
  return (
    <div className="extracurricular__hero">
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