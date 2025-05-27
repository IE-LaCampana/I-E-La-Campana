import React from "react";
import useStaffSearch from "../../hooks/useStaffSearch";
import staffData from "../../data/staffData";
import StaffSearch from "../../components/StaffSearch/StaffSearch";
import StaffGrid from "../../components/StaffGrid/StaffGrid";
import "../../styles/staffDirectory.css";

const StaffDirectory = () => {
  // Verificar que tenemos datos
  if (!staffData || staffData.length === 0) {
    return (
      <div className="staff-directory">
        <div className="staff-header">
          <h1 className="staff-title">CONOZCA AL EQUIPO</h1>
        </div>
        <div className="staff-empty">
          <i className="bi bi-exclamation-triangle"></i>
          <h3>No hay datos disponibles</h3>
          <p>
            Por favor, verifica que el archivo de datos esté correctamente
            configurado
          </p>
        </div>
      </div>
    );
  }

  const {
    searchTerm,
    setSearchTerm,
    filterArea,
    setFilterArea,
    filteredData,
    areas,
  } = useStaffSearch(staffData);

  return (
    <div className="staff-directory">
      <div className="staff-header">
        <h1 className="staff-title">
          <strong>CONOZCA </strong>AL EQUIPO
        </h1>
      </div>

      <StaffSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        filterArea={filterArea}
        onFilterChange={setFilterArea}
        areas={areas}
      />

      <StaffGrid staff={filteredData} />
    </div>
  );
};

export default StaffDirectory;
