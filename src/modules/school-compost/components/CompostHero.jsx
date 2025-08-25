import React from "react";
import "../styles/compostHero.css";
import { compostHeroData } from "../data/compostHeroData";
import Button from "../../core/design-system/Button/Button";
import { useNavigate } from "react-router-dom";

const CompostHero = ({ data = compostHeroData }) => {
    const { title, description, image } = data;
    
    const navigate = useNavigate();
          const handleViewMore = () => {
          navigate(`/organics`);
        }
        

  return (
    <section className="compost-hero">
      <div className="compost-hero__container">
        <div className="compost-hero__content">
          <div className="compost-hero__text">
            <h1 className="compost-hero__title">{title}</h1>
            <p className="compost-hero__description">{description}</p>
            <Button label="LO QUE RECOGEMOS" onClick={handleViewMore} />
            
          </div>
        </div>

        <div className="compost-hero__media">
          <div className="compost-hero__image-container">
            <img
              src={image.src}
              alt={image.alt}
              className="compost-hero__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompostHero;
