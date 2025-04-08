import React from 'react'
import "./MissionVisionValues.css";
import Mision from '../../../../assets/institutional/Mision.png';
import Vision from '../../../../assets/institutional/Vision.png';

const MissionVisionValues = () => {
  return (
    <div className='mvv-container'>
      <div className='mvv-header'>
      <h2 className="mvv-title"><strong>MISIÓN, VISIÓN</strong> Y VALORES</h2>
      </div>
      <div className='mvv-introduction'>
      <p className="subtitle-mision-vision-valore">
        Creada en 1974, Los Sauces es una institución educativa privada de
        carácter europeo, independiente, apolítica y aconfesional, que abarca
        todas las etapas de la enseñanza no universitaria. Cuenta con cinco
        colegios presentes en las ciudades de Madrid (La Moraleja y
        Torrelodones), Pontevedra (con residencia de estudiantes), Vigo y
        Dublín.
        </p>
      </div>
      <div className='mvv-mision-block'>
      <h2 className='mvv-block-title'>MISIÓN</h2>
      <p>
        La institución Educativa la Campana con sedes en el Resguardo de
        Guambia, Santa Lucia zona campesina y Tulcán Resguardo de toró Municipio
        de Silvia, Departamento del Cauca titne como misión orientar y educar a
        la niñez y la juventud en el saber escuchar - sentir, ver, pensar y
        hacer, basada en la formación integral generando ambientes escolares
        motivantes e incluyentes que le permita desarrollar procesos de
        fortalecimiento de pervivencia en relación armónica con la naturaleza.
        </p>
        <div className='mvv-image-container'>
          <img src={Mision} alt="Imagen representativa de la visión" className='mvv-content-image'/>
          </div>
      </div>
      <div className='mvv-block'>
      <h2 className='mvv-block-title'>VISIÓN</h2>
      <p>
        La institución Educativa La Campana, Se posicionará en el año 2022 como una
        institución lider en procesos educativos, sociales y ambientales para la 
        pervivencia cultural de la comunidad y la materialización de los proyectos 
        de vida de sus educados promoviendo competividad y producida sostenible
        </p>
        <div className='mvv-image-container'>
          <img src={Vision} alt="Imagen representativa de la visión" className='mvv-content-image'/>
          </div>
      </div>
      <div className='mvv-block'>
      <h2 className='mvv-block-title'>VALORES</h2>
      <p>
        En la Institución Educativa La Campana, nuestra enseñanza se basa en una pedagogía
        activa e intercultural, en constante actualización para responder a las necesidades
        de nuestros estudiantes y fortalecer la identidad Misak.
        </p>
        <ul className='mvv-core-values'>
           <li>Promovemos el aprendizaje del idioma Misak (Namtrik) junto con el español, fortaleciendo la identidad cultural de nuestra comunidad.</li>
          <li>Incorporamos herramientas digitales para mejorar el aprendizaje y la conectividad.</li>
          <li>Nuestro equipo educativo se destaca por su profesionalismo, experiencia y cercanía con los estudiantes.</li>
          <li>Implementamos un sistema de tutorías para el seguimiento académico y el desarrollo integral de cada aprendiz.</li>
          <li>Fomentamos una comunicación cercana y constante con los padres de familia para reforzar el proceso educativo.</li>
          <li>Compromiso con la sostenibilidad y el entorno, promoviendo el respeto por la naturaleza y la cultura Misak.</li>
          <li>Amplia oferta de actividades culturales, deportivas y artísticas, fortaleciendo el desarrollo integral de los estudiantes.</li>
        </ul>
        <p className='mvv-values-conclusion'>
          Por todo ello, consideramos irrenunciables nuestros valores éticos y profesionales que, guiando en todo momento nuestra labor, nos identifican como una institución educativa seria y coherente caracterizada por:
        </p>

        <ul className='mvv-core-values'>
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
    </div>
  );
}

export default MissionVisionValues