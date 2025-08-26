import React from "react";
import "../styles/compostablesCard.css";

const CompostablesCard = ({ data }) => {
  const items = Array.isArray(data) ? data : [data];

  return (
    <div className="compostables-cards-container">
      {items.map((item, index) => {
        const { title, description, image, button } = item;

        return (
          <section className="compostables-card" key={index}>
            <div className="compostables-card__image">
              {image && <img src={image.src} alt={image.alt || "Imagen"} />}
            </div>

            <div className="compostables-card__content">
              <h2 className="compostables-card__title">{title}</h2>
              <p className="compostables-card__description">{description}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default CompostablesCard;
