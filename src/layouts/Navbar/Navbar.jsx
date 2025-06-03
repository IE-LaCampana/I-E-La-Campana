import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemNavbar from "../../modules/core/design-system/ItemNavbar/ItemNavbar";
import Logo from "../../layouts/Logo/Logo";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  const toggleDropdown = (id) => {
    setOpenDropdowns({
      ...openDropdowns,
      [id]: !openDropdowns[id],
    });
  };

  const educationalCentersDropdown = [
    {
      route: "/sedes/la-campana",
      icon: "bi bi-buildings",
      content: "I.E. Principal",
    },
    {
      route: "/sede-piendamo-arriba",
      icon: "bi bi-geo-alt-fill",
      content: "C.D. Piendamó Arriba",
    },
    {
      route: "/sede-pueblito",
      icon: "bi bi-house-fill",
      content: "C.D.R.M. Pueblito",
    },
    {
      route: "/sede-tulcan",
      icon: "bi-house-door",
      content: "C.D.R.M. Tulcán",
    },
    {
      route: "/sede-santa-lucia",
      icon: "bi bi-tree",
      content: "E.R.M. Santa Lucía",
    },
    {
      route: "/sede-manantial",
      icon: "bi bi-water",
      content: "E.R.M. Manantial",
    },
    {
      route: "/sede-carmelo",
      icon: "bi bi-house-heart",
      content: "E.M.M. Carmelo",
    },
  ];

  const ourInstitutionDropdown = [
    {
      route: "/quienes-somos",
      icon: "bi bi-info-circle",
      content: "Quienes Somos",
    },
    {
      route: "/nuestro-equipo",
      icon: "bi bi-building",
      content: "Nuestro Equipo",
    },
    { route: "/logros", icon: "bi bi-people", content: "Reconocimientos" },
    {
      route: "/jornada-unica",
      icon: "bi bi-clock-history",
      content: "Jornada Única",
    },
    {
      route: "/asociacion-padres",
      icon: "bi bi-people-fill",
      content: "Asociación de Padres",
    },
    {
      route: "/inscripciones",
      icon: "bi bi-pencil-square",
      content: "Inscripciones",
    },
  ];

  const accessDropdown = [
    { route: "/login", icon: "bi bi-key", content: "Iniciar Sesión" },
    { route: "/registro", icon: "bi bi-pencil-square", content: "Registrate" },
  ];

  const studentLifeDropdown = [
    {
      route: "/actividades",
      icon: "bi bi-building",
      content: "Actividades Deportivas",
    },
    { route: "/biblioteca", icon: "bi bi-book-half", content: "Biblioteca" },
    {
      route: "/bienestar",
      icon: "bi bi-heart",
      content: "Bienestar Estudiantil",
    },
    {
      route: "/alimentacion",
      icon: "bi bi-cup-straw",
      content: "Restaurante Escolar",
    },
    {
      route: "/tecnologia",
      icon: "bi bi-pc-display",
      content: "Sala de Sistemas",
    },
    {
      route: "/laboratorio",
      icon: "bi bi-thermometer",
      content: "Laboratorio de Química",
    },
  ];

  const environmentalDropdown = [
    {
      route: "/programas-ecológicos",
      icon: "bi bi-pin",
      content: "Programas Ecológicos",
    },
    {
      route: "/huertas-escolares",
      icon: "bi bi-graph-up",
      content: "Huertas Escolares",
    },
    {
      route: "/reciclaje-reducción",
      icon: "bi bi-folder",
      content: "Reciclaje y Reducción",
    },
    {
      route: "/abonos-orgánicos",
      icon: "bi bi-megaphone",
      content: "Abonos Orgánicos",
    },
  ];

  const projectsDropdown = [
    { route: "/prae", icon: "bi bi-tree", content: "PRAE" },
    { route: "/yatul", icon: "bi bi-house-door", content: "Yatul" },
    { route: "/artes", icon: "bi bi-palette", content: "Artes" },
    {
      route: "/plantas-edicinales",
      icon: "bi bi-flower1",
      content: "Plantas Medicinales",
    },
  ];

  const alumniDropdown = [
    { route: "/testimonios", icon: "bi bi-chat-quote", content: "Testimonios" },
    {
      route: "/encuentros",
      icon: "bi bi-people-fill",
      content: "Encuentros de Alumnos",
    },
  ];

  const menuItems = [
    { id: "inicio", route: "/", content: "INICIO" },
    {
      id: "sedes",
      route: "/",
      content: "SEDES EDUCATIVAS",
      dropdown: educationalCentersDropdown,
    },
    {
      id: "institucion",
      route: "/",
      content: "NUESTRA INSTITUCIÓN",
      dropdown: ourInstitutionDropdown,
    },
    {
      id: "vidad",
      route: "/",
      content: "SERVICIOS",
      dropdown: studentLifeDropdown,
    },
    {
      id: "ingresar",
      route: "/",
      content: "INGRESAR",
      dropdown: accessDropdown,
    },
    {
      id: "ambiente",
      route: "/",
      content: "MEDIO AMBIENTE",
      dropdown: environmentalDropdown,
    },
    {
      id: "proyectos",
      route: "/",
      content: "PROYECTOS",
      dropdown: projectsDropdown,
    },
    {
      id: "egresados",
      route: "/",
      content: "EGRESADOS",
      dropdown: alumniDropdown,
    },
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-ul">
          {menuItems.map((item) => (
            <ItemNavbar
              key={item.id}
              route={item.route}
              content={item.content}
              dropdownItemns={item.dropdown}
            />
          ))}
        </ul>
      </nav>
      <button
        className={`hamburger-menu ${mobileMenuOpen ? "hidden" : ""}`}
        onClick={toggleMobileMenu}
      >
        <i className="bi bi-list"></i>
      </button>
      <div
        className="mobile-overlay"
        style={{ display: mobileMenuOpen ? "block" : "none" }}
        onClick={toggleMobileMenu}
      ></div>

      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={toggleMobileMenu}>
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
                    ></i>
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
                          onClick={toggleMobileMenu}
                        >
                          <i className={subItem.icon}></i>
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
                  onClick={toggleMobileMenu}
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

export default Navbar;
