import React from "react";
import { audiovisualServices } from "../data/audiovisualRoomData";
import "../styles/audiovisualRoomCard.css";

const AudiovisualRoomCard = () => {
  return (
    <div className="audiovisual-card-section">
      <div className="audiovisual-card-grid">
        {audiovisualServices.map((service) => (
          <div key={service.id} className="audiovisual-card-container">
            <div className="audiovisual-card">
              <div className="audiovisual-card-face audiovisual-card-front">
                <div className="audiovisual-card-image">
                  <img src={service.frontImage} alt={service.title} />
                </div>
                <div className="audiovisual-card-title">
                  <h3>{service.title}</h3>
                </div>
              </div>
              <div className="audiovisual-card-face audiovisual-card-back">
                <div className="audiovisual-card-back-content">
                  <div className="audiovisual-card-back-info">
                    <h3>{service.title}</h3>
                    <p className="audiovisual-card-description">
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
}

export default AudiovisualRoomCard



