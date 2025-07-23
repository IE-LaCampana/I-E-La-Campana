import React from "react";

import SalaSistemas from "../../../assets/backgrounds/sala-de-sistemas1.jpg"
import TopCentroInterno from "../../../assets/backgrounds/top-centro-interno.png"

const SystemsLab = () => {
  const services = [
    {
      id: 1,
      text: "Apoyo a las tareas de computo en diferentes la habilidad dentro de la Sala de sistemas.",
    },
    {
      id: 2,
      text: "Mantener actualizados permanentemente los sistemas de información y el trabajo actualizado.",
    },
    {
      id: 3,
      text: "Respaldar los archivos tecnológicos y reportar cualquier daño o mal funcionamiento en los equipos de computo.",
    },
    {
      id: 4,
      text: "No se permite el uso de dispositivos USB personales sin autorización previa.",
    },
    {
      id: 5,
      text: "Esta prohibido ingresar comida y bebidas a las oficinas y salas de computo.",
    },
    {
      id: 6,
      text: "Acceder únicamente a sitios web permitidos con fines educativos.",
    },
    {
      id: 7,
      text: "Reportar cualquier problema técnico encontrado a los técnicos o un coordinador, supervisando mientras estos realizan las tareas asignadas.",
    },
    {
      id: 8,
      text: "No ingresar con mochilas grandes a elementos que bloqueen el paso entre las estantes.",
    },
    {
      id: 9,
      text: "Usar de estos sala como responsable del equipo que utiliza durante su permanencia en la sala.",
    },
    {
      id: 10,
      text: "Salir de la sala solo con autorización del docente o encargado.",
    },
  ];

  return (
    <div className="systems-lab-container">
      {/* Header Section */}
      <div className="systems-lab-header">
        <div className="systems-lab-header-image">
          <img src={TopCentroInterno} alt="" />
        </div>
      </div>

      {/* Content Section */}
      <div className="systems-lab-content">
        <div className="contents-wrapper">
          <div className="header-overlay">
            <h1 className="header-title">
              <strong>SALA DE</strong> SISTEMAS
            </h1>
          </div>

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span className="breadcrumb-item">Servicios</span>
            <span className="breadcrumb-separator">
              <i class="bi bi-chevron-double-right"></i>
            </span>
            <span className="breadcrumb-item active">Sala de sistemas</span>
          </div>

          {/* Main Content */}
          <div className="content-grid">
            {/* Left Column - Image and Description */}
            <div className="content-left">
              <div className="lab-image-container">
                <img
                  src={SalaSistemas}
                  alt="Sala de Sistemas"
                  className="lab-image"
                />
              </div>

              <div className="lab-description">
                <p className="description-text">
                  La Sala de la tecnología espacio y modular sistemas de
                  información sistemas de los colaboradores en de trabajo y
                  acceso a las diferentes plataformas digitales servicios
                  institucionales de información académica estudiantil.
                </p>
                <p className="description-text">
                  La emergencia de las comunicaciones y las tecnologías de la
                  información y la comunicación.
                </p>
                <p className="description-text">
                  El uso de las salas de sistemas es exclusivo para el
                  desarrollo de clase. Los estudiantes pueden ingresar sólo
                  cuando están acompañados de un profesor. Se prohíbe el uso de
                  dispositivos de almacenamiento externo como memorias USB sin
                  previa autorización del docente.
                </p>
                <p className="description-text">
                  Solo se permite el acceso a sitios web con fines educativos y
                  académicos. Los estudiantes podrán solicitar el bloqueo de
                  páginas web durante su proceso de aprendizaje, según sea
                  necesario para mantener el enfoque académico.
                </p>
              </div>
            </div>

            {/* Right Column - Services List */}
            <div className="content-right">
              <div className="services-container">
                <h2 className="description-title">Reglamento de uso:</h2>
                <ul className="services-list">
                  {services.map((service) => (
                    <li key={service.id} className="service-item">
                      <div className="service-icon">
                        <div className="check-icon">
                          <i class="bi bi-check"></i>
                        </div>
                      </div>
                      <span className="service-text">{service.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemsLab;
