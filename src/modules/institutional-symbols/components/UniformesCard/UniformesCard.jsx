import React from "react";
import "../../styles/uniformesCard.css";
import decorativeLine from "../../../../assets/institutional/CENEFA-01.png";

const UniformesCard = ({ title, description, uniformes }) => {
  return (
    <section className="uniformes-card">
      <div className="uniformes-card-container">
        <div className="uniformes-card__content">
          <p className="uniformes-intro">{description}</p>
          <div className="uniformes-grid">
            {uniformes.map((uniforme, index) => (
              <div key={index} className="uniforme-item">
                <img
                  src={uniforme.image}
                  alt={uniforme.label}
                  className="uniforme-image"
                />
                <p className="uniforme-label">{uniforme.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="uniformes-card__divider">
        <img src={decorativeLine} alt="Separador Misak" />
      </div>
    </section>
  );
};

export default UniformesCard;