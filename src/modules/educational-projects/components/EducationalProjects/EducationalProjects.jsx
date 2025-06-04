import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "../../styles/educationalProjects.css";


const EducationalProjects = ({ projectData }) => {
  return (
    <div className="educational-projects-container">
      <h1 className="educational-projects-title">
        <strong>PROYECTOS</strong> EDUCATIVOS
      </h1>
      <p className="educational-projects-description">
        En la Institución Educativa La Campana, los
        <strong> Proyectos Educativos</strong> representan una parte fundamental
        de nuestra propuesta pedagógica, orientada al desarrollo integral de
        nuestros estudiantes. A través de estas iniciativas, buscamos fomentar
        competencias académicas, ciudadanas, culturales y ambientales,
        promoviendo el pensamiento crítico, la creatividad y el compromiso
        social. Cada proyecto está diseñado en coherencia con nuestro Proyecto
        Educativo Institucional (PEI) y responde a las necesidades e intereses
        de la comunidad educativa, fortaleciendo los valores institucionales y
        consolidando espacios de aprendizaje significativo dentro y fuera del
        aula.
      </p>
      <div className="educational-projects-content">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            status={project.status}
          />
        ))}
      </div>
    </div>
  );
};

export default EducationalProjects;



