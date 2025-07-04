import React from "react";
import "../../styles/philosophyCard.css";

export const PhilosophyCard = ({ title, description, image, alt }) => {
  return (
    <div className="philosophy-container">
      <div className="philosophy-text">
        <h2 className="philosophy-title">{title}</h2>
        <p className="philosophy-description">{description}</p>
      </div>
      <div className="philosophy-image-wrapper">
        <img src={image} alt={alt} className="philosophy-image" />
      </div>
    </div>
  );
};
