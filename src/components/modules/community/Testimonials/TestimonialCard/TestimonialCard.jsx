import React from "react";
import { Link } from "react-router-dom";
import "./TestimonialCard.css"; 

const TestimonialCard = ({
  id,
  image,
  name,
  description,
  truncateLength = 150,
  showReadMore = false,
  isDetailView = false,
  className = "",
}) => {

  const truncateText = (text) => {
    if (!text || text.length <= truncateLength) return text;
    return `${text.substring(0, truncateLength)}...`;
  };

  const displayDescription = isDetailView
    ? description
    : truncateText(description);

  return (
    <div className={`testimonial-card ${className}`}>
      <div className="testimonial-avatar">
        <img src={image} alt={name} className="testimonial-image" />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">{displayDescription}</p>
        <h2 className="testimonial-name">{name}</h2>

        {showReadMore && !isDetailView && (
          <div className="testimonial-read-more">
            <Link to={`/testimonios/${id}`} className="read-more-link">
              Leer más <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
