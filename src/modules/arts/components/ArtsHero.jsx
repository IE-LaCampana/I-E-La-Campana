import React from 'react';
import "../styles/artsHero.css";

const ArtsHero = ({ title, backgroundImage }) => {
  return (
    <div
      className="arts-hero"
      style={{ backgroundImage: `url(${backgroundImage})`, 
    }}
    >
      <div className="arts-hero__overlay">
        <div className="arts-hero__container">
            <div className="arts-hero__content">
                <h1 className="artes-hero__title">{title}</h1>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default ArtsHero