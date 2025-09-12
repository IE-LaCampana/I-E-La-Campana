import React from "react";
import "../styles/artsExperience.css";

const ArtsExperience = ({ data }) => {
  // Tomar solo el primer elemento del array para mostrar en la página de detalle
  const experienceData = data && data.length > 0 ? data[0] : null;

  if (!experienceData) {
    return (
      <div className="arts-experience">
        <div className="arts-experience-container">
          <p>No hay experiencia disponible para este arte.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="arts-experience">
      <div className="arts-experience-container">
        {/* Contenido de texto */}
        <div className="arts-experience-content">
          <div className="arts-experience-text">
            <span className="arts-experience-category">
              {experienceData.category}
            </span>
            <p className="arts-experience-description">
              {experienceData.title}
            </p>
          </div>
        </div>

        {/* Imagen */}
        <div className="arts-experience-image">
          <img
            src={experienceData.image}
            alt={`Experiencia de ${experienceData.id}`}
            className="arts-experience-img"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtsExperience;
