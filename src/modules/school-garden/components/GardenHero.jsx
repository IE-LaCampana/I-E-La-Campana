import React from "react";
import "../styles/gardenHero.css";

const GardenHero = ({ title, breadcrumb, image, background }) => {
  return (
    <section
      className="garden-hero"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="garden-hero__overlay">
        <div className="garden-hero__content">
          <div className="garden-hero__breadcrumb">
          </div>

          <h1 className="garden-hero__title">{title}</h1>
        </div>

        <div className="garden-hero__image">
          <img src={image} alt="Garden Hero" />
        </div>
      </div>
    </section>
  );
};

export default GardenHero;
