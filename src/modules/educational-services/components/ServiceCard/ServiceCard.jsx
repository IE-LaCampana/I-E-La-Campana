import React from "react";
import "../../styles/serviceCard.css";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import useFlipCard from "../../hooks/useFlipCard";

const ServiceCard = ({ title, image, detailedInfo }) => {
  const { isFlipped, isAnimating, handleFlip } = useFlipCard();

  return (
    <div className={`service-card-container ${isFlipped ? "flipped" : ""}`}>
      <div
        className={`service-card-flip-wrapper ${
          isFlipped ? "service-card-flipped" : ""
        }`}
      >
        <div className="service-card-face service-card-front-face">
          <div className="service-card-content-wrapper">
            <div className="service-card-image-section">
              <img
                src={image}
                alt={title}
                className="service-card-main-image"
              />
              <div className="service-card-gradient-overlay"></div>
            </div>
            <div className="service-card-info-section">
              <h3 className="service-card-title">{title}</h3>
              <button
                onClick={handleFlip}
                disabled={isAnimating}
                className="service-card-flip-button"
                aria-label={`Ver más información sobre ${title}`}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="service-card-face service-card-back-face">
          <ServiceDetails
            title={title}
            detailedInfo={detailedInfo}
            onClose={handleFlip}
            isAnimating={isAnimating}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;