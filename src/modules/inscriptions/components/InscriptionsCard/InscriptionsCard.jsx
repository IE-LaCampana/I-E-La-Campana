import React from "react";
import "../../styles/inscriptionsCard.css"; 


const InscriptionsCard = ({ inscriptions }) => {
  return (
    <div className="inscriptions-card-container">
      {inscriptions.map((inscription, index) => (
        <div className="inscriptions-card-content" key={index}>
          <h2 className="inscriptions-card-content-title">
            {inscription.title}
          </h2>
          <div className="inscriptions-content-description">
            {Array.isArray(inscription.description) ? (
              inscription.description.map((item, itemIndex) => (
                <div key={itemIndex} className="inscriptions-content-description-item">
                  <i className="bi bi-arrow-right inscriptions-description-icon"></i>
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p>{inscription.description}</p>
            )}
          </div>
          {inscription.hasButton && (
            <div className="inscriptions-button-container">
              <button
                className={`inscriptions-button ${inscription.buttonClass}`}
              >
                {inscription.buttonText}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InscriptionsCard;
