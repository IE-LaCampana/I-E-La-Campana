import { useEffect, useState } from "react";

const useDropdown = ({ dropdownItemns, dropdownRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasDropdown = dropdownItemns && dropdownItemns.length > 0;

  const handleMouseEnter = () => {
    if (hasDropdown) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (hasDropdown) setIsOpen(false);
  };

  const toggleDropdown = (e) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return {
    isOpen,
    hasDropdown,
    handleMouseEnter,
    handleMouseLeave,
    toggleDropdown,
  };
};

export default useDropdown;
