import React, { useState } from "react";
import "../../styles/academicPrograms.css";
import { academicPrograms } from "../../data/academicProgramsData";

const AcademicPrograms = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardFlip = (index) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  return (
    <div className="academic-programs">
      <h1 className="academic-programs-title">
        <strong>PROGRAMAS </strong>ACADÉMICOS
      </h1>
      <div className="programs-grid">
        {academicPrograms.map((programa, index) => (
          <div
            key={index}
            className={`program-card ${flippedCard === index ? "flipped" : ""}`}
          >
            <div className="card-inner">
              <div className="program-card-front">
                <div className="program-card-border">
                  <img
                    src={programa.image}
                    alt={programa.title}
                    className="card-image"
                  />
                  <div className="card-overlay">
                    <h2 className="card-title">
                      {programa.title.toUpperCase()}
                    </h2>
                  </div>
                  <div
                    className="card-icon"
                    onClick={() => handleCardFlip(index)}
                  >
                    <i className="bi bi-plus"></i>
                  </div>
                </div>
              </div>
              <div className="program-card-back">
                <div className="program-details">
                  <h2 className="details-title">
                    {programa.title.toUpperCase()}
                  </h2>
                  <p className="details-description">{programa.description}</p>
                  <div
                    className="card-icon back-icon"
                    onClick={() => handleCardFlip(index)}
                  >
                    <i className="bi bi-x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicPrograms;
