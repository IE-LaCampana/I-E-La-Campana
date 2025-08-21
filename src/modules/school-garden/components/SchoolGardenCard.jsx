import React from "react";
import "../styles/schoolGardenCard.css";

const SchoolGardenCard = ({ title, text, image, imageLeft = false }) => {
  return (
    <div className="school-garden-card">
      <div
        className={`school-garden-card__container ${
          imageLeft ? "school-garden-card__container--reverse" : ""
        }`}
      >
        <div className="school-garden-card__text">
          <h1 className="school-garden-card__title">{title}</h1>
          <p className="school-garden-card__description">{text}</p>
        </div>
        <img src={image} alt={title} className="school-garden-card__image" />
      </div>
    </div>
  );
};

export default SchoolGardenCard;
