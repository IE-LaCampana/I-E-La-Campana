import React from "react";
import "../styles/PraeCard.css";

const PraeCard = ({ data }) => {
  return (
    <div className="prae-card__container">
      {data.map((item, index) => (
        <div key={index} className="prae-card">
          <h2 className="prae-card__title">{item.title}</h2>
          <p className="prae-card__description">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PraeCard;
