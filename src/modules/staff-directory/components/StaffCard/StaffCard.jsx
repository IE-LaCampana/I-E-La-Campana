import React from "react";
import "../../styles/staffCard.css";

const StaffCard = ({ staff }) => {
  return (
    <div className="staff-card">
      <div className="staff-card-image">
        <img
          src={staff.image}
          alt={staff.name}
          onError={(e) => {
            e.target.src = "/placeholder-avatar.png"; // Imagen por defecto si falla la carga
          }}
        />
      </div>
      <div className="staff-card-content">
        <h3 className="staff-name">{staff.name}</h3>
        <p className="staff-position">{staff.position}</p>

        <div className="staff-contact">
          <i class="bi bi-mortarboard"></i>
          <div className="contact-item">
            <span>Especialización</span>
            <p className="contact-value">{staff.specialization}</p>
          </div>
        </div>

        <div className="staff-contact">
          <i class="bi bi-briefcase"></i>
          <div className="contact-item">
            <span>Experiencia</span>
            <p className="contact-value">{staff.experience}</p>
          </div>
        </div>
        <div className="staff-contact">
          <i class="bi bi-bar-chart-line"></i>
          <div className="contact-item">
            <span>Nivel Educativo</span>
            <p className="contact-value">{staff.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;


