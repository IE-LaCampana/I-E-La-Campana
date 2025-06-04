import React from "react";
import useStaffSearch from "../../hooks/useStaffSearch";
import staffData from "../../data/staffData";
import StaffSearch from "../../components/StaffSearch/StaffSearch";
import StaffGrid from "../../components/StaffGrid/StaffGrid";
import "../../styles/staffDirectory.css";

const StaffDirectory = ({ customStaffData }) => {
  const dataToUse = customStaffData || staffData;

  const {
    searchTerm,
    setSearchTerm,
    filterArea,
    setFilterArea,
    filteredData,
    areas,
  } = useStaffSearch(dataToUse);

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
