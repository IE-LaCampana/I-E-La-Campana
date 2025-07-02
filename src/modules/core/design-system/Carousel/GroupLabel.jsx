// Carousel/GroupLabel.js
import React from "react";

const GroupLabel = ({ currentSlide, slideIndex }) => {
  // Función para generar el contenido del label basado en el slide actual
  const getLabelContent = () => {
    // Si el slide tiene una propiedad específica para el label, úsala
    if (currentSlide.labelContent) {
      return currentSlide.labelContent;
    }

    // Si no, genera el contenido basado en el label/title
    const slideLabel = currentSlide.label || currentSlide.title || "";

    // Casos especiales para slides específicos
    if (slideLabel.includes("Aquí comienzan") || slideLabel === "Bienvenida") {
      return <span>Aquí comienzan los grandes sueños</span>;
    }

    if (slideLabel === "Misak Band") {
      return <span>Misak Band</span>;
    }

    if (slideLabel === "Kampanatun") {
      return <span>Kampanatun</span>;
    }

    // Para grupos académicos (formato "X-Y" o "Transición")
    if (slideLabel === "Transición") {
      return (
        <span>
          Grupo <strong>Transición</strong>
        </span>
      );
    }

    // Para grupos numerados (1-1, 2-1, etc.)
    if (slideLabel.match(/^\d+-\d+$/)) {
      return (
        <span>
          Grupo <strong>{slideLabel}</strong>
        </span>
      );
    }

    // Caso por defecto
    return (
      <span>
        Grupo <strong>{slideLabel}</strong>
      </span>
    );
  };

  return <div className="group-label">{getLabelContent()}</div>;
};

export default GroupLabel;
