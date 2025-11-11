import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = ({ items, isOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveSubmenu(index);
  }

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  }

  return (
    <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`dropdown-item ${item.submenu ? "has-submenu" : ""}`}
          onMouseEnter={() => item.submenu && handleMouseEnter(index)}
          onMouseLeave={() => item.submenu && handleSubmenuLeave()}
        >
          {item.route ? (
            <NavLink to={item.route} className="dropdown-link">
              <i className={item.icon}></i>
              <span>{item.content}</span>
            </NavLink>
          ) : (
            <div className="dropdown-link">
              <i className={item.icon}></i>
              <span>{item.content}</span>
              {item.submenu && (
                <i className="bi bi-chevron-right submenu-arrow"></i>
              )}
            </div>
          )}
          {item.submenu && (
            <ul className={`submenu-nested ${activeSubmenu === index ? "show" : ""}`}>
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className="submenu-item">
                  <NavLink to={subItem.route} className="submenu-link">
                    <i className={subItem.icon}></i>
                    <span>{subItem.content}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
