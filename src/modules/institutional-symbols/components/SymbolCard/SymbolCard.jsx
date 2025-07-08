// src/modules/institutional-symbols/components/SymbolCard.jsx

import React from "react";
import "../../styles/symbolCard.css";
import decorativeLine from "../../../../assets/institutional/CENEFA-01.png";


const SymbolCard = ({ title, description, image, alt }) => {
  return (
    <section className="symbol-card">
      <div className="symbol-card-container">
        <div className="symbol-card__image-container">
          <img src={image} alt={alt} className="symbol-card__image" />
        </div>
        <div className="symbol-card__content">
          <h2 className="symbol-card__title">{title}</h2>
          <p
            className="symbol-card__description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
      <div className="symbol-card__divider">
        <img src={decorativeLine} alt="Separador Misak" />
      </div>
    </section>
  );
};

export default SymbolCard;

