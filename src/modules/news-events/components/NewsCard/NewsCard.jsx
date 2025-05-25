// src/components/ui/NewsCard.jsx
import React from "react";
import "../../styles/newsEventsCarousel.css"; // puedes seguir usando CSS tradicional si lo prefieres
import { Link } from "react-router-dom";

const NewsCard = ({ image, title, date, description, id, type }) => {
  return (
    <div className="event-slide">
      <div className="event-image-placeholder">
        <img src={image} alt={title} />
      </div>
      <div className="event-details">
        <h3>{title}</h3>
        <p className="event-date">
          <i className="bi bi-clock me-2"></i>
          {date}
        </p>
        <p className="event-description">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
