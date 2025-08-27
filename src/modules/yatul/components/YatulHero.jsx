import React from "react";
import "../styles/yatulHero.css";

const YatulHero = ({ data }) => {
  const { leftImage, rightImage, title, image} = data;

  return (
    <section className="yatulHero__container">
      <div
        className="yatulHero__image yatulHero__image--left"
        style={{ backgroundImage: `url(${leftImage})` }}
      ></div>
      <div
        className="yatulHero__image yatulHero__image--right"
        style={{ backgroundImage: `url(${rightImage})` }}
      ></div>
      <div
        className="yatulHero__overlay"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="yatulHero__overlay-content">
          <h1 className="yatulHero__title">{title}</h1>
        </div>
      </div>
    </section>
  );
};

export default YatulHero;
