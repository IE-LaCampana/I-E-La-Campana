import React from "react";
import StaffCard from "../../components/StaffCard/StaffCard";
import "../../styles/staffGrid.css";

const StaffGrid = ({ staff = [] }) => {
  if (!staff || staff.length === 0) {
    return (
      <div className="staff-empty">
        <i className="bi bi-people"></i>
        <h3>No se encontraron resultados</h3>
        <p>Intenta con otros términos de búsqueda o ajusta los filtros</p>
      </div>
    );
  }

  return (
    <div className="staff-grid">
      {staff.map((member, index) => (
        <StaffCard
          key={member.id ? `staff-${member.id}` : `staff-${index}`}
          staff={member}
        />
      ))}
    </div>
  );
};

export default StaffGrid;
