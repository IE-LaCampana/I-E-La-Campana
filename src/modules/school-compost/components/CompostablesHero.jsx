import React from "react";
import "../styles/compostablesHero.css";
import { compostablesHeroData } from "../data/compostablesHeroData";
const CompostablesHero = ({ data = compostablesHeroData }) => {
    const { title, image } = data;


  return (
    <section className="compostables-hero">
      <div className="compostables-hero__background">
        <img
          src={image.src}
          alt={image.alt}
          className="compostables-hero__image"
        />
        <div className="compostables-hero__overlay"></div>
      </div>

      <div className="compostables-hero__content">
        <h1 className="compostables-hero__title">{title}</h1>
      </div>

    </section>
  );
};

export default CompostablesHero;
