import React from "react";
import "../../styles/staffSearch.css";
import StaffFilter from "../../components/StaffFilter/StaffFilter";

const StaffSearch = ({
  searchTerm,
  onSearchChange,
  filterArea,
  onFilterChange,
  areas,
}) => {
  return (
    <div className="staff-search-container">
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por nombre, cargo o área..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="search-button" type="button">
          <i className="bi bi-search"></i>
          Buscar
        </button>
      </div>

      <StaffFilter
        filterArea={filterArea}
        onFilterChange={onFilterChange}
        areas={areas}
      />
    </div>
  );
};

export default StaffSearch;
