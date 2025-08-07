import React from "react";
import { activityCard } from "../data/activityCard";
import "../styles/activityCard.css";

const ActivityCard = () => {
  return (
    <div className="activity-card-section">
      <div className="activity-card-grid">
        {activityCard.map((service) => (
          <div key={service.id} className="activity-card-container">
            <div className="activity-card">
              <div className="activity-card-face activity-card-front">
                <div className="activity-card-image">
                  <img src={service.frontImage} alt={service.title} />
                </div>
                <div className="activity-card-title">
                  <h3>{service.title}</h3>
                </div>
              </div>
              <div className="activity-card-face activity-card-back">
                <div className="activity-card-back-content">
                  <div className="activity-card-back-info">
                    <h3>{service.title}</h3>
                    <p className="activity-card-description">
                      {service.description}
                    </p>
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

export default ActivityCard;
