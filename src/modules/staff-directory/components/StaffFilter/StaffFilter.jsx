import "../../styles/staffSearch.css";

const StaffFilter = ({ filterArea, onFilterChange, areas }) => {
  return (
    <div className="filter-container">
      <label className="filter-label">Filtrar por:</label>
      <select
        className="filter-select"
        value={filterArea}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Todos</option>
        {areas.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StaffFilter;
