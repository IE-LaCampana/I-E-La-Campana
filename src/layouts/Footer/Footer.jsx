import React from "react";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>CONÉCTATE CON NOSOTROS</h2>
          <ul>
            <li>
              <i className="bi bi-telephone"></i>+57 XXXXXXXXXX
            </li>
            <li>
              <i className="bi bi-envelope"></i>
              ielacampana@gmail.com
            </li>
            <li>
              <i className="bi bi-geo-alt"></i>Vereda La Campana, Resguardo de
              Guambia Municipio de Silvia, Departamento del Cauca, Colombia.
            </li>
            <li>
              <i className="bi bi-clock"></i>Horario de Atención: Lunes a
              Viernes - 8:00 a.m. a 4:00 p.m.
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>SOPORTE AL CLIENTE</h2>
          <ul>
            <li>
              <i className="bi bi-question-circle"></i>Centro de ayuda
            </li>
            <li>
              <i className="bi bi-question-circle"></i>Preguntas Frecuentes{" "}
            </li>
            <li>
              <i className="bi bi-tools"></i>Asistencia Técnica
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>NORMATIVIDAD Y POLÍTICAS</h2>
          <ul>
            <li>
              <i className="bi bi-file-text"></i>Reglamento Institucional
            </li>
            <li>
              <i className="bi bi-shield-lock"></i>Política de Privacidad
            </li>
            <li>
              <i className="bi bi-file-earmark-text"></i>Términos y Condiciones
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>SÍGUENOS EN REDES SOCIALES</h2>
          <ul>
            <li>
              <i className="bi bi-globe"></i>Sitio Web Oficial
            </li>
            <li>
              <i className="bi bi-instagram"></i>Instagram
            </li>
            <li>
              <i className="bi bi-facebook"></i>Facebook
            </li>
            <li>
              <i className="bi bi-youtube"></i>YouTube
            </li>
            <li>
              <i className="bi bi-tiktok"></i>TikTok
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p className="footer-copyright-text">
          Todos los derechos reservados © 2025 Institución Educativa La Campana
        </p>
      </div>
    </div>
  );
};

export default Footer;
