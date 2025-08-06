import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css"; 


const HeroSection = ({ title, description }) => {
    const navigate = useNavigate();
      const handleViewMore = () => {
      navigate(`/nuestro-menu`);
    }
    

  return (
    <div className="hero__section">
      <div className="hero-section__overlay">
        <div className="hero-section__container">
          <div className="hero-section__content">
            <h1 className="hero-section__title">{title}</h1>

            <div className="hero-section__subtitle-group">
              <p className="hero-section__subtitle">{description}</p>
            </div>

            <Button label="Ver menú" onClick={handleViewMore} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
