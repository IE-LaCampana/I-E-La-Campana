import React from "react";
import "../../styles/projectCard.css";
import Button from "../../../../modules/core/design-system/Button/Button";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ id, title, description, image, status }) => {

  const navigate = useNavigate();
  const handleViewMoreDtails = () => {
    navigate(`/proyectos/${id}`);
  }

  return (
    <div className="project-card ">
      <div className="projects-grid">
        <div className="project-card-image-container">
          <img src={image} alt={title} className="project-card-image" />
        </div>

        <div className="project-card-container">
          <div className="project-card-header">
            <h2 className="project-card-subtitle">{title}</h2>
            <span className="project-card-status">{status}</span>
          </div>
          <div className="project-card-content">
            <p className="project-description">{description}</p>

            <Button label="Ver mas detalles" onClick={handleViewMoreDtails}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;


