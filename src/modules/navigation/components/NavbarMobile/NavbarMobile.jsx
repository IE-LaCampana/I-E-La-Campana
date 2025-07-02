import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../../layouts/Logo/Logo";
import { menuItems } from "../../data/menuItems";

const NavbarMobile = ({ isOpen, toggleMenu }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div
        className="mobile-overlay"
        style={{ display: isOpen ? "block" : "none" }}
        onClick={toggleMenu}
      />
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMenu}>
          <i className="bi bi-x-lg"></i>
        </button>
        <Logo />
        <ul className="mobile-menu-list">
          {menuItems.map((item) => (
            <li key={item.id} className="mobile-menu-item">
              {item.dropdown ? (
                <>
                  <button
                    className="mobile-dropdown-toggle"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.content}
                    <i
                      className={`bi bi-chevron-${
                        openDropdowns[item.id] ? "up" : "down"
                      }`}
                    />
                  </button>
                  <ul
                    className={`mobile-dropdown-menu ${
                      openDropdowns[item.id] ? "show" : ""
                    }`}
                  >
                    {item.dropdown.map((subItem, index) => (
                      <li key={index} className="mobile-dropdown-item">
                        <NavLink
                          to={subItem.route}
                          className="mobile-dropdown-link"
                          onClick={toggleMenu}
                        >
                          <i className={subItem.icon} />
                          <span>{subItem.content}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={item.route}
                  className="mobile-menu-link"
                  onClick={toggleMenu}
                >
                  {item.content}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavbarMobile;
