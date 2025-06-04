import React from "react";
import PropTypes from "prop-types";
import "../../styles/staffCard.css";

const StaffCard = ({
  name,
  image,
  specialization,
  experience,
  level,
  position,
}) => {
  return (
    <div className="staff-card">
      <div className="staff-card-image">
        <img
          src={image}
          alt={name}
        />
      </div>
      <div className="staff-card-content">
        <h3 className="staff-name">{name}</h3>
        <p className="staff-position">{position}</p>

        <div className="staff-contact">
          <i className="bi bi-mortarboard"></i>
          <div className="contact-item">
            <span>Especialización</span>
            <p className="contact-value">{specialization}</p>
          </div>
        </div>

        <div className="staff-contact">
          <i className="bi bi-briefcase"></i>
          <div className="contact-item">
            <span>Experiencia</span>
            <p className="contact-value">{experience}</p>
          </div>
        </div>

        <div className="staff-contact">
          <i className="bi bi-bar-chart-line"></i>
          <div className="contact-item">
            <span>Nivel Educativo</span>
            <p className="contact-value">{level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

StaffCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  specialization: PropTypes.string,
  experience: PropTypes.string,
  level: PropTypes.string,
  position: PropTypes.string,
};

export default StaffCard;
