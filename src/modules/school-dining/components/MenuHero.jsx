import React from 'react'
import "../styles/menuHero.css";

const MenuHero = ({ title }) => {

  return (
    <div className="hero__menu">
      <div className="hero-menu__overlay">
        <div className="hero-menu__container">
          <div className="hero-menu__content">
            <h1 className="hero-menu__title">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHero;