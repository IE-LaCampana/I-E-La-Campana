import React from "react";
import "../styles/yatulCards.css";

const YatulCard = ({ data }) => {
  return (
    <div className="yatulCard">
      {data.map((item, index) => {
        const shouldAlternate = index % 2 === 1;

        return (
          <div
            className={`yatulCard__content ${
              shouldAlternate ? "yatulCard__content--alternate" : ""
            }`}
            key={index}
          >
            <div className="yatulCard__text">
              <h2 className="yatulCard__title">{item.title}</h2>
              <p className="yatulCard__description">{item.description}</p>
            </div>
            <div className="yatulCard__imageWrapper">
              <img
                src={item.image}
                alt={item.title}
                className="yatulCard__image"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default YatulCard;
