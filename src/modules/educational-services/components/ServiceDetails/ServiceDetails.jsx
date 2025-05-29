import React from "react";
import "../../styles/serviceDetails.css";

const ServiceDetails = ({ title, detailedInfo, onClose, isAnimating }) => {
  return (
    <div className="service-details-main-container">
      <div className="service-details-header-bar">
        <h3 className="service-details-header-title">{title}</h3>
        <button
          onClick={onClose}
          disabled={isAnimating}
          className="service-details-close-action-button"
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
      <div className="service-details-content-area">
        <p className="service-details-description-text">
          {detailedInfo.description}
        </p>
        <h4 className="service-details-features-heading">
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
        <ul className="service-details-features-list">
          {detailedInfo.features.map((feature, index) => (
            <li key={index} className="service-details-feature-item">
              <span className="service-details-feature-bullet"></span>
              {feature}
            </li>
          ))}
        </ul>
        <div className="service-details-action-section">
          <button
            className="service-details-navigate-button"
            disabled={isAnimating}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>Ver más detalles</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;