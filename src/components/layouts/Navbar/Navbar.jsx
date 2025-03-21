import React from "react";
import ItemNavbar from "../../ul/ItemNavbar/ItemNavbar";
import "./Navbar.css";

const Navbar = () => {
  const sedesEducativasDropdown = [
    { route: "/sede-principal", icon: "bi bi-buildings", content: "C.E. Principal", },
    { route: "/sede-piendamo-arriba", icon: "bi bi-geo-alt-fill", content: "C.D. Piendamó Arriba", },
    { route: "/sede-pueblito", icon: "bi bi-house-fill", content: "C.D.R.H. El Pueblito", },
    { route: "/sede-tulcan", icon: "bi-house-door", content: "C.D.R.N. El Tulcán", },
    { route: "/sede-santa-lucia", icon: "bi bi-tree", content: "E.R.M. Santa Lucía", },
    { route: "/sede-manantial", icon: "bi bi-water", content: "E.R.M. Manantial", },
    { route: "/sede-carmelo", icon: "bi bi-house-heart", content: "E.R.M. El Carmelo", },
  ];

  const nuestraInstitucionDropdown = [
    { route: "/quienes-somos", icon: "bi bi-info-circle", content: "Quienes Somos", },
    { route: "/nuestro-equipo", icon: "bi bi-building", content: "Nuestro Equipo", },
    { route: "/logros", icon: "bi bi-people", content: "Reconocimientos" },
    { route: "/jornada-unica", icon: "bi bi-clock-history", content: "Jornada Única", },
  ];

  const programasAcademicosDropdown = [
    { route: "/prescolar", icon: "bi bi-emoji-smile", content: "Prescolar" },
    { route: "/primaria", icon: "bi bi-book", content: "Básica Primaria" },
    { route: "/segundaria", icon: "bi bi-journal-richtext", content: "Básica Secundaria", },
    { route: "/media-tecnica", icon: "bi bi-mortarboard", content: "Media Técnica", },
    { route: "/cursos", icon: "bi bi-journal-bookmark", content: "Cursos y diplomas" },
  ];

   const accesoDropdown = [
     { route: "/login", icon: "bi bi-key", content: "Iniciar Sesión" },
     { route: "/registro", icon: "bi bi-pencil-square", content: "Registrate" },
   ];

  const vidaEstudiantilDropdown = [
    { route: "/actividades", icon: "bi bi-building", content: "Actividades Deportivas", },
    { route: "/biblioteca", icon: "bi bi-book-half", content: "Biblioteca" },
    { route: "/bienestar", icon: "bi bi-heart", content: "Bienestar Estudiantil", },
    { route: "/proyectos-estudiantes", icon: "bi bi bi-tools", content: "Proyectos Estudiantiles", },
  ];

  const docentesDropdown = [
    { route: "/tareas", icon: "bi bi-pin", content: "Publicación de Tareas" },
    { route: "/notas", icon: "bi bi-graph-up", content: "Registro de notas" },
    { route: "/material", icon: "bi bi-folder", content: "Material de Apoyo" },
    { route: "/comunicados", icon: "bi bi-megaphone", content: "Comunicados" },
  ];

  const estudiantesDropdown = [
    { route: "/mis-tareas", icon: "bi bi-folder2", content: "Mis Tareas" },
    { route: "/mis-calificaciones", icon: "bi bi-bar-chart", content: "Mis Calificaciones", },
    { route: "/calendario", icon: "bi bi-calendar-week", content: "Calendario Académico", },
    { route: "/foro", icon: "bi bi-chat-dots", content: "Foro Estudiantil" },
  ];

  const proyectosDropdown = [
    { route: "/prae", icon: "bi bi-tree", content: "PRAE" },
    { route: "/yatul", icon: "bi bi-house-door", content: "Yatul" },
    { route: "/artes", icon: "bi bi-palette", content: "Artes" },
    { route: "/plantas-edicinales", icon: "bi bi-flower1", content: "Plantas Medicinales", },
  ];

  const egresadosDropdown = [
    { route: "/testimonios", icon: "bi bi-chat-quote", content: "Testimonios" },
    { route: "/encuentros", icon: "bi bi-people-fill", content: "Encuentros de Alumnos", },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-ul">
        <ItemNavbar route="/" content="INICIO" />
        <ItemNavbar route="/" content="SEDES EDUCATIVAS" dropdownItemns={sedesEducativasDropdown} />
        <ItemNavbar route="/" content="NUESTRA INSTITUCIÓN" dropdownItemns={nuestraInstitucionDropdown} />
        <ItemNavbar route="/" content="PROGRAMAS ACADEMICOS" dropdownItemns={programasAcademicosDropdown} />
        <ItemNavbar route="/" content="ACCESO" dropdownItemns={accesoDropdown} />
        <ItemNavbar route="/" content="VIDA ESTUDIANTIL" dropdownItemns={vidaEstudiantilDropdown} />
        <ItemNavbar route="/" content="DOCENTES" dropdownItemns={docentesDropdown} />
        <ItemNavbar route="/"content="ESTUDIANTES" dropdownItemns={estudiantesDropdown} />
        <ItemNavbar route="/" content="PROYECTOS" dropdownItemns={proyectosDropdown}/>
        <ItemNavbar route="/" content="EGRESADOS" dropdownItemns={egresadosDropdown} />
      </ul>
    </nav>
  );
};

export default Navbar;
