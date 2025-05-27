import { useState, useMemo } from "react";

const useStaffSearch = (data) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterArea, setFilterArea] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((staff) => {
      const matchesSearch =
        searchTerm === "" ||
        staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        staff.area.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = filterArea === "" || staff.area === filterArea;

      return matchesSearch && matchesFilter;
    });
  }, [data, searchTerm, filterArea]);

  const areas = useMemo(() => {
    const uniqueAreas = [...new Set(data.map((staff) => staff.area))];
    return uniqueAreas;
  }, [data]);

  // Determina si hay una búsqueda activa
  const isSearching = searchTerm !== "" || filterArea !== "";

  return {
    searchTerm,
    setSearchTerm,
    filterArea,
    setFilterArea,
    filteredData,
    areas,
    isSearching,
  };
};

export default useStaffSearch;
