import React from "react";
import "../styles/compostHowToCard.css";


const CompostHowToCard = ({ data }) => {
  return (
    <div className="compost-howto-wrapper">
      {data.map((item) => (
        <div
          key={item.id}
          className={`compost-card ${item.reverse ? "reverse" : ""}`}
        >
          <div className="compost-card__image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="compost-card__content">
            <h3 className="compost-card__title">{item.title}</h3>
            <p className="compost-card__description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompostHowToCard;





