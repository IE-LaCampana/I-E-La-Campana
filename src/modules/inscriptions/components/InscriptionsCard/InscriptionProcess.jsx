import React, { useState } from "react";
import Breadcrumb from "../../../core/design-system/Breadcrumb/Breadcrumb";
import Sidebar from "../../../../layouts/Sidebar/Sidebar";
import "../../styles/inscriptionProcess.css";
import {
  breadcrumbItems,
  sidebarItems,
  agesByGrade,
} from "../../data/inscriptionProcessData";

const InscriptionProcessComponent = () => {
  const [activeSection, setActiveSection] = useState("proceso");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    // Aquí puedes agregar lógica para cambiar el contenido según la sección
  };

  return (
    <div className="inscription-process-container">
      <Breadcrumb items={breadcrumbItems} />

      <div className="main-container">
        <div className="content-wrapper">
          <Sidebar
            title="Índice de la página"
            items={sidebarItems}
            onSectionChange={handleSectionChange}
            defaultActive="proceso"
          />

          <div className="main-content">
            <div className="content-card">
              <div className="content-inner">
                <div className="content-header">
                  <h1 className="content-title">Proceso de inscripción</h1>
                  <div className="title-underline"></div>
                </div>

                <div className="content-description">
                  <p className="description-text">
                    Conoce los requisitos necesarios para realizar el proceso de
                    inscripción y matrícula, para hacer parte de la Institución
                    Educativa La Campana.
                  </p>
                </div>

                <div className="ages-section">
                  <h2 className="ages-title">Edades admitidas por grado:</h2>

                  <div className="ages-list">
                    {agesByGrade.map((item, index) => (
                      <div key={index} className="age-item">
                        <div className="age-bullet"></div>
                        <div className="age-content">
                          <p className="age-text">
                            <span className="grade-name">{item.grade}:</span>{" "}
                            {item.ages}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionProcessComponent;
