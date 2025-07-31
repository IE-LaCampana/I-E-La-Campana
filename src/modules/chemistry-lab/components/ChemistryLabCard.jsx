// Componente React actualizado
import React from "react";
import "./../styles/chemistryLab.css";
import BorderImage from "../../../assets/backgrounds/marco-para-video-1.png";


const ChemistryLabCard = ({ title, sections }) => {
  return (
    <section className="chem-lab-container">
      {/* Imagen de cabecera */}
      <div className="chemistry-lab-image">
        <div className="chem-lab-header">
          <h2>
            <strong>{title.split(" ")[0]}</strong>{" "}
            {title.split(" ").slice(1).join(" ")}
          </h2>
        </div>
      </div>

      {/* Secciones dinámicas */}
      <div className="chemistry-lab-content">
        {sections &&
          sections.map((section, index) => (
            <div key={index} className="chem-lab-body">
              <div className="chem-lab-description-container">
                <h3 className="lab-section-title">{section.title}</h3>
                <p className="chem-lab-description">{section.description}</p>
              </div>
              <div className="image-frame-overlay">
                <img
                  src={section.image}
                  alt={section.title}
                  className="chem-lab-body-image-inside"
                />
                <img
                  src={BorderImage}
                  alt="Marco decorativo"
                  className="chem-lab-image-frame-border"
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ChemistryLabCard;


