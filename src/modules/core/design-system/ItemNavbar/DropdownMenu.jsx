import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ items, isOpen }) => {
  return (
    <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
      {items.map((item, index) => (
        <li key={index} className="dropdown-item">
          <NavLink to={item.route} className="dropdown-link">
            <i className={item.icon}></i>
            <span>{item.content}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
