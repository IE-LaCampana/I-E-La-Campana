import React, { useState } from "react";
import "./MissionVisionValues.css";
import Mision from "../../../../assets/institutional/PsicoActiva.jpg";
import Vision from "../../../../assets/institutional/PsicoActiva.jpg";
import Valores from "../../../../assets/institutional/PsicoActiva.jpg";

const MissionVisionValues = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [animating, setAnimating] = useState(false);

  const handleShowVideo = (e) => {
    e.preventDefault();
    setAnimating(true);
    setTimeout(() => {
      setShowVideo(true);
      setAnimating(false);
    }, 800); // Duración de la animación
  };

  const handleCloseVideo = (e) => {
    e.preventDefault();
    setAnimating(true);
    setTimeout(() => {
      setShowVideo(false);
      setAnimating(false);
    }, 800); // Duración de la animación
  };

  const values = [
    "Respeto",
    "Compromiso",
    "Responsabilidad",
    "Confianza",
    "Solidaridad",
    "Tolerancia",
    "Trabajo en equipo",
    "Dedicación y esfuerzo",
    "Pensamiento crítico",
    "Vocación por la excelencia",
    "Compañerismo",
    "Trato familiar",
    "Innovación",
  ];

  return (
    <div className="mvv-container">
      <div className="mvv-header">
        <h2 className="mvv-title">
          <strong>MISIÓN, VISIÓN</strong> Y VALORES
        </h2>
      </div>
      <div className="mvv-introduction">
        <p className="subtitle-mision-vision-valore">
          Creada en 1974, Los Sauces es una institución educativa privada de
          carácter europeo, independiente, apolítica y aconfesional, que abarca
          todas las etapas de la enseñanza no universitaria. Cuenta con cinco
          colegios presentes en las ciudades de Madrid (La Moraleja y
          Torrelodones), Pontevedra (con residencia de estudiantes), Vigo y
          Dublín.
        </p>
      </div>

      {/* Sección de Misión con diseño actualizado */}
      <div className="mvv-section">
        <div className="mvv-diagonal-container">
          <div className="mvv-image-overlay">
            <img
              src={Mision}
              alt="Imagen representativa de la misión"
              className="mvv-background-image"
            />
          </div>
          <div className="mvv-content-card">
            <h2 className="mvv-section-title">MISIÓN</h2>
            <p className="mvv-description">
              La Institución Educativa La Campana tiene como misión orientar y
              educar a la niñez y juventud en el saber escuchar, sentir, ver,
              pensar y hacer. Se basa en una formación integral, generando
              ambientes escolares motivadores e inclusivos que permitan
              desarrollar procesos de fortalecimiento en relación armónica con
              la naturaleza.
            </p>
            <div className="mvv-links">
              <a href="#" className="mvv-link">
                NUESTRA MISIÓN
              </a>
              <a href="#" className="mvv-link">
                PROPUESTA PEDAGÓGICA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Visión con diseño invertido */}
      <div className="mvv-section">
        <div className="mvv-diagonal-container vision-layout">
          <div className="mvv-image-overlay vision-image">
            <img
              src={Vision}
              alt="Imagen representativa de la visión"
              className="mvv-background-image"
            />
          </div>
          <div className="mvv-content-card vision-card">
            <h2 className="mvv-section-title">VISIÓN</h2>
            <p className="mvv-description">
              La Institución Educativa La Campana se posicionará como una
              institución líder en procesos educativos, sociales y ambientales,
              promoviendo la pervivencia cultural de la comunidad y la
              materialización de los proyectos de vida de sus educandos,
              fomentando la competitividad y una producción sostenible.
            </p>
            <div className="mvv-links">
              <a href="#" className="mvv-link">
                ENFOQUE EDUCATIVO
              </a>
              <a href="#" className="mvv-link">
                PROYECCIÓN INSTITUCIONAL
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Valores con el mismo diseño que Misión */}
      <div className="mvv-section">
        <div className="mvv-diagonal-container">
          <div className="mvv-image-overlay">
            <img
              src={Valores}
              alt="Imagen representativa de los valores"
              className="mvv-background-image"
            />
          </div>
          <div className="mvv-content-card">
            <h2 className="mvv-section-title">VALORES</h2>
            <p className="mvv-description">
              En la Institución Educativa La Campana, nuestra enseñanza se basa
              en una pedagogía activa e intercultural, en constante
              actualización para responder a las necesidades de nuestros
              estudiantes y fortalecer la identidad comunitaria. Promovemos
              valores como el respeto, compromiso, responsabilidad, confianza y
              solidaridad en todos nuestros procesos educativos.
            </p>
            <div className="mvv-links">
              <a href="#" className="mvv-link">
                NUESTROS VALORES
              </a>
              <a href="#" className="mvv-link">
                COMUNIDAD EDUCATIVA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de lista de valores con el mismo diseño que Misión (corregido) */}
      <div className="mvv-section">
        <div className="mvv-diagonal-container">
          <div className="mvv-image-overlay">
            <img
              src={Valores}
              alt="Imagen representativa de los valores institucionales"
              className="mvv-background-image"
            />
          </div>
          <div className="mvv-content-card">
            <h2 className="mvv-section-title">NUESTROS VALORES</h2>

            {/* Nueva estructura para los valores */}
            <div className="mvv-values-organized">
              {values.map((value, index) => (
                <div key={index} className="mvv-value-pill">
                  {value}
                </div>
              ))}
            </div>

            <div className="mvv-links">
              <a href="#" className="mvv-link">
                FILOSOFÍA INSTITUCIONAL
              </a>
              <a href="#" className="mvv-link">
                PRINCIPIOS EDUCATIVOS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de video institucional con animación de página */}
      <div className="mvv-section">
        <div className="mvv-diagonal-container vision-layout">
          <div className="mvv-image-overlay vision-image">
            <img
              src={Mision}
              alt="Imagen representativa de nuestra institución"
              className="mvv-background-image"
            />
          </div>
          <div
            className={`mvv-content-card vision-card ${
              animating ? "page-turning" : ""
            }`}
          >
            {!showVideo ? (
              <>
                <h2 className="mvv-section-title">VIDEO INSTITUCIONAL</h2>
                <p className="mvv-description">
                  Conoce nuestra institución a través de este video que muestra
                  nuestra filosofía educativa, instalaciones y la experiencia
                  formativa que ofrecemos. Descubre cómo fomentamos el
                  desarrollo integral de nuestros estudiantes en un ambiente
                  innovador y comprometido con la excelencia.
                </p>
                <div className="mvv-video-button">
                  <a href="#" className="mvv-link" onClick={handleShowVideo}>
                    VER VIDEO COMPLETO
                  </a>
                </div>
              </>
            ) : (
              <div className="mvv-video-container-fullscreen">
                <button
                  className="mvv-video-close-btn"
                  onClick={handleCloseVideo}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
                <div className="mvv-video-wrapper">
                  <iframe
                    className="mvv-content-video"
                    src="https://www.youtube.com/embed/e-N1kw_OPlE?rel=0&autoplay=1"
                    title="Video Institucional"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
