import React from "react";
import "../styles/menuCard.css";

const MenuCard = ({ day, title, image, description }) => {
  return (
    <div className="menu-card">
      <div className="menu-card__image-wrapper">
        <img
          src={image}
          alt={`Plato del ${day}`}
          className="menu-card__image"
        />
      </div>
      <div className="menu-card__content">
        <h3 className="menu-card__day">{day}</h3>
        <h4 className="menu-card__title">{title}</h4>
        <p className="menu-card__description">{description}</p>
      </div>
    </div>
  );
};

export default MenuCard;

