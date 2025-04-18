import React from "react";
import "./MissionVisionValues.css";
import Mision from "../../../../assets/institutional/Mision.png";
import Vision from "../../../../assets/institutional/Vision.png";

const MissionVisionValues = () => {
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
      <div className="mvv-mision-block">
        <h2 className="mvv-block-title">MISIÓN</h2>
        <p>
          La Institución Educativa La Campana, con sedes en el Resguardo de
          Guambia, Santa Lucía (zona campesina) y Tulcán (Resguardo de Toró), en
          el municipio de Silvia, departamento del Cauca, tiene como misión
          orientar y educar a la niñez y juventud en el saber escuchar, sentir,
          ver, pensar y hacer. Se basa en una formación integral, generando
          ambientes escolares motivadores e inclusivos que permitan desarrollar
          procesos de fortalecimiento de la pervivencia en relación armónica con
          la naturaleza.
        </p>
        <div className="mvv-image-container">
          <img
            src={Mision}
            alt="Imagen representativa de la visión"
            className="mvv-content-image"
          />
        </div>
      </div>
      <div className="mvv-block">
        <h2 className="mvv-block-title">VISIÓN</h2>
        <p>
          La Institución Educativa La Campana se posicionará como una
          institución líder en procesos educativos, sociales y ambientales,
          promoviendo la pervivencia cultural de la comunidad y la
          materialización de los proyectos de vida de sus educandos, fomentando
          la competitividad y una producción sostenible.
        </p>
        <div className="mvv-image-container">
          <img
            src={Vision}
            alt="Imagen representativa de la visión"
            className="mvv-content-image"
          />
        </div>
      </div>
      <div className="mvv-block">
        <h2 className="mvv-block-title">VALORES</h2>
        <p>
          En la Institución Educativa La Campana, nuestra enseñanza se basa en
          una pedagogía activa e intercultural, en constante actualización para
          responder a las necesidades de nuestros estudiantes y fortalecer la
          identidad Misak.
        </p>
        <ul className="mvv-core-values">
          <li>
            Promovemos el aprendizaje del idioma Misak (Namtrik) junto con el
            español, fortaleciendo la identidad cultural de nuestra comunidad.
          </li>
          <li>
            Incorporamos herramientas digitales para mejorar el aprendizaje y la
            conectividad.
          </li>
          <li>
            Nuestro equipo educativo se destaca por su profesionalismo,
            experiencia y cercanía con los estudiantes.
          </li>
          <li>
            Implementamos un sistema de tutorías para el seguimiento académico y
            el desarrollo integral de cada aprendiz.
          </li>
          <li>
            Fomentamos una comunicación cercana y constante con los padres de
            familia para reforzar el proceso educativo.
          </li>
          <li>
            Compromiso con la sostenibilidad y el entorno, promoviendo el
            respeto por la naturaleza y la cultura Misak.
          </li>
          <li>
            Amplia oferta de actividades culturales, deportivas y artísticas,
            fortaleciendo el desarrollo integral de los estudiantes.
          </li>
        </ul>
        <p className="mvv-values-conclusion">
          Por todo ello, consideramos irrenunciables nuestros valores éticos y
          profesionales que, guiando en todo momento nuestra labor, nos
          identifican como una institución educativa seria y coherente
          caracterizada por:
        </p>

        <ul className="mvv-core-values">
          <li>Respeto</li>
          <li>Compromiso</li>
          <li>Responsabilidad</li>
          <li>Confianza</li>
          <li>Solidaridad</li>
          <li>Tolerancia</li>
          <li>Trabajo en equipo</li>
          <li>Dedicación y esfuerzo</li>
          <li>Pensamiento crítico</li>
          <li>Vocación por la excelencia</li>
          <li>Compañerismo</li>
          <li>Trato familiar</li>
          <li>Innovación</li>
        </ul>
      </div>
      <div className="mvv-block">
        <h2 className="mvv-block-title">¿CÓMO SON NUESTROS ALUMNOS?</h2>
        <p className="mvv-video-description">
          Nuestros alumnos son el reflejo de nuestros valores y filosofía
          educativa. Aprende más sobre cómo formamos jóvenes comprometidos,
          responsables y preparados para los desafíos del futuro.
        </p>
        <div className="mvv-video-container">
          <iframe
            className="mvv-content-video"
            src="https://www.youtube.com/embed/e-N1kw_OPlE?rel=0"
            title="¿Cómo son nuestros alumnos?"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;
