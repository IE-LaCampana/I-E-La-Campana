import React, { useState } from "react";
import "../../styles/studentServiceCard.css";


const StudentServiceCard = ({
  id,
  title,
  image,
  description,
  detailedInfo,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="student-service-card-wrapper">
      <div
        className={`student-service-card-inner ${
          isFlipped ? "student-service-card-flipped" : ""
        }`}
      >
        {/* Frente de la tarjeta */}
        <div className="student-service-card-face student-service-card-front">
          <div className="student-service-card-content">
            <div className="student-service-card-image-container">
              <img
                src={image}
                alt={title}
                className="student-service-card-image"
              />
              <div className="student-service-card-gradient-overlay"></div>
            </div>
            <div className="student-service-card-info">
              <h3 className="student-service-card-title">{title}</h3>
              <button
                onClick={handleFlip}
                disabled={isAnimating}
                className="student-service-card-button"
                aria-label={`Ver más información sobre ${title}`}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Parte trasera de la tarjeta */}
        <div className="student-service-card-face student-service-card-back">
          <div className="student-service-card-header">
            <h3>{title}</h3>
            <button
              onClick={handleFlip}
              disabled={isAnimating}
              className="student-service-card-close-button"
              aria-label="Cerrar información"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="student-service-card-details">
            <p>{detailedInfo.description}</p>
            <h4>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Características:
            </h4>
            <ul>
              {detailedInfo.features.map((feature, index) => (
                <li key={index}>
                  <span className="student-service-card-dot"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentServiceCard;