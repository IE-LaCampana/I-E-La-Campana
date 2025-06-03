import React from "react";
import "../../styles/LocationCard.css";

const LocationCard = ({ name, description, mapUrl }) => {
  return (
    <div className="headquarters-item">
      <div className="map-container">
        <iframe
          title={`Mapa de ${name}`}
          src={mapUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h2 className="headquarters-name">{name}</h2>
      <p className="headquarters-description">{description}</p>
    </div>
  );
};

export default LocationCard;
