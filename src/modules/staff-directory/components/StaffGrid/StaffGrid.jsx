import StaffCard from "../../components/StaffCard/StaffCard";
import "../../styles/staffGrid.css";

const StaffGrid = ({ staff = [] }) => {
  if (!staff.length) {
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
      {staff.map(
        ({ id, name, image, specialization, experience, level, position }) => (
          <StaffCard
            key={id}
            id={id}
            name={name}
            image={image}
            specialization={specialization}
            experience={experience}
            level={level}
            position={position}
          />
        )
      )}
    </div>
  );
};

export default StaffGrid;
