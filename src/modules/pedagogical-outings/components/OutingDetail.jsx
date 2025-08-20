import React from "react";
import "../styles/outingDetail.css";

const OutingDetail = ({ data }) => {
  if (!data) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p>No se han proporcionado datos para mostrar la salida pedagógica.</p>
      </div>
    );
  }

  return (
    <div className="outing-detail">
      {/* Descripción principal */}
      <div className="outing-detail-description">
        <p>{data.description}</p>
      </div>

      {/* Contenido principal */}
      <div className="outing-detail-content">
        {/* Columna izquierda - Información principal */}
        <div className="outing-detail-main-info">
          {/* Tarjetas de información básica */}
          <div className="outing-detail-info-cards">
            <div className="outing-detail-info-card">
              <div className="outing-detail-info-card-header">
                <svg
                  className="outing-detail-info-card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="outing-detail-info-card-label">Sede</div>
              </div>
              <p className="outing-detail-info-card-value">
                {data.basicInfo.sede}
              </p>
            </div>

            <div className="outing-detail-info-card">
              <div className="outing-detail-info-card-header">
                <svg
                  className="outing-detail-info-card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 6.13 6.13 3 10 3H14C17.87 3 21 6.13 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <div className="outing-detail-info-card-label">Ubicación</div>
              </div>
              <p className="outing-detail-info-card-value">
                {data.basicInfo.ubicacion}
              </p>
            </div>

            <div className="outing-detail-info-card">
              <div className="outing-detail-info-card-header">
                <svg
                  className="outing-detail-info-card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 4V2C16 1.45 15.55 1 15 1H9C8.45 1 8 1.45 8 2V4H4C3.45 4 3 4.45 3 5S3.45 6 4 6H5V19C5 20.1 5.9 21 7 21H17C18.1 21 19 20.1 19 19V6H20C20.55 6 21 5.55 21 5S20.55 4 20 4H16ZM10 3H14V4H10V3ZM17 6V19H7V6H17Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="outing-detail-info-card-label">Grado</div>
              </div>
              <p className="outing-detail-info-card-value">
                {data.basicInfo.grado}
              </p>
            </div>

            <div className="outing-detail-info-card">
              <div className="outing-detail-info-card-header">
                <svg
                  className="outing-detail-info-card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 8C18.2091 8 20 6.20914 20 4C20 1.79086 18.2091 0 16 0C13.7909 0 12 1.79086 12 4C12 6.20914 13.7909 8 16 8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16 10C13.79 10 12 11.79 12 14V18C12 19.1 12.9 20 14 20H18C19.1 20 20 19.1 20 18V14C20 11.79 18.21 10 16 10Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 14C5.79 14 4 15.79 4 18V22C4 23.1 4.9 24 6 24H10C11.1 24 12 23.1 12 22V18C12 15.79 10.21 14 8 14Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="outing-detail-info-card-label">
                  Participantes
                </div>
              </div>
              <p className="outing-detail-info-card-value">
                {data.basicInfo.participantes} estudiantes
              </p>
            </div>

            <div className="outing-detail-info-card">
              <div className="outing-detail-info-card-header">
                <svg
                  className="outing-detail-info-card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="12,6 12,12 16,14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="outing-detail-info-card-label">Duración</div>
              </div>
              <p className="outing-detail-info-card-value">
                {data.basicInfo.duracion}
              </p>
            </div>

            <div className="outing-detail-info-card">
              <div className="outing-detail-info-card-header">
                <svg
                  className="outing-detail-info-card-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <div className="outing-detail-info-card-label">Fecha</div>
              </div>
              <p className="outing-detail-info-card-value">
                {data.basicInfo.fecha}
              </p>
            </div>
          </div>

          {/* Sección de actividades */}
          <div className="outing-detail-activities-section">
            <h2 className="outing-detail-section-title">
              Actividades Realizadas
            </h2>
            <div className="outing-detail-activities-list">
              {data.activities.map((activity) => (
                <div key={activity.id} className="outing-detail-activity-item">
                  <div className="outing-detail-activity-header">
                    <h3 className="outing-detail-activity-title">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="outing-detail-activity-description">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar derecho */}
        <div className="outing-detail-sidebar">
          {/* Sección de docentes */}
          <div className="outing-detail-teachers-section">
            <h2 className="outing-detail-section-title">
              Docentes Participantes
            </h2>
            <div className="outing-detail-teachers-list">
              {data.teachers.map((teacher) => (
                <div key={teacher.id} className="outing-detail-teacher-item">
                  <div className="outing-detail-teacher-name">
                    {teacher.name}
                  </div>
                  <div className="outing-detail-teacher-role">
                    {teacher.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutingDetail;
