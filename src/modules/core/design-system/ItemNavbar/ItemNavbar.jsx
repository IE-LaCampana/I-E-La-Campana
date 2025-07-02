import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import useDropdown from "./useDropdown";
import DropdownMenu from "./DropdownMenu";
import "./ItemNavbar.css";

const ItemNavbar = ({ route, content, dropdownItemns }) => {
  const dropdownRef = useRef(null);
  const {
    isOpen,
    hasDropdown,
    handleMouseEnter,
    handleMouseLeave,
    toggleDropdown,
  } = useDropdown({ dropdownItemns, dropdownRef });

  return (
    <li
      className={`nav-item ${isOpen ? "active" : ""}`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavLink
        to={route}
        className={`nav-link ${hasDropdown ? "has-dropdown" : ""}`}
        onClick={toggleDropdown}
      >
        {content}
        {hasDropdown && (
          <i
            className={`bi bi-chevron-${isOpen ? "up" : "down"} dropdown-icon`}
          ></i>
        )}
      </NavLink>
      {hasDropdown && <DropdownMenu items={dropdownItemns} isOpen={isOpen} />}
    </li>
  );
};

export default ItemNavbar;
