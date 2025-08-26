import React from 'react'
import MenuHero from '../../school-dining/components/MenuHero';
import { praeHeroData } from '../data/praeHeroData';
import PraeCard from '../components/PraeCard';
import { praeData } from '../data/praeData';
import StaffTable from '../components/StaffTable';
import { staffData } from '../data/staffData';
import "../styles/praeCard.css";

const PraePage = () => {
  return (
    <div>
      <MenuHero {...praeHeroData} />
      <div className="prae-page-text">
        <p className="prae-page-text-description">
          La construcción y elaboración del presente documento toma como base
          los criterios y postulados del Decreto 1743 del 3 de agosto de 1994
          por el cual se establece el Proyecto de Educación Ambiental PRAE, para
          todos los niveles de educación formal, se fijan criterios para la
          promoción de la educación ambiental no formal e informal y se
          establecen los mecanismos de coordinación entre el Ministerio de
          Educación Nacional y el Ministerio del Medio Ambiente. De igual forma
          toma entre diversos referentes conceptuales, los planteados por la
          Política Nacional de Educación Nacional SINA, del Ministerio de Medio
          Ambiente (2002). En concordancia a los referentes legales y
          conceptuales citados, el Proyecto Ambiental Escolar perteneciente a la
          Institución Educativa la Campana y sus sedes, parte del diagnóstico e
          identificación de las necesidades ambientales institucionales y del
          entorno inmediato, estableciendo la importancia de sensibilizar y
          formar a la comunidad educativa a partir de una serie de acciones que
          favorezcan por una parte la generación de una conciencia ambiental y
          por otra contribuyan al mejoramiento de situaciones ambientales que
          afectan tanto la institución como su entorno inmediato, la armonía del
          ser con sí mismo, con los demás y con el medio donde vive dentro del
          marco de la protección y preservación de la madre tierra en armonía
          para la pervivencia del pueblo Misak y otros pueblos. De igual forma
          el Proyecto Ambiental Escolar, busca consolidar un colectivo
          ambientalista, en el cual participan los estudiantes de la Institución
          Educativa la Campana y sus sedes, donde se enfatiza en actividades de
          formación ambiental, artístico-cultural que, con el apoyo las
          entidades de orden local, municipal, departamental y nacional y/u
          otras de índole cooperación internacional, buscando la generación de
          un colectivo ambientalista integral que adquieran conocimientos en el
          plano ambiental y ejecuten acciones tendientes a la preservación y
          mejoramiento del medio ambiente , la salud física y mental en un
          ambiente sano. La apuesta es lograr que los niños, niñas y jóvenes
          sean multiplicadores de los aprendizajes obtenidos y desarrollen
          acciones que impacten positivamente a la madre tierra y preservación
          cultural de los saberes propios. El Proyecto Ambiental Escolar de la
          Institución Educativa La Campana. para el presente año, no está
          enmarcado en un núcleo temático específico, puesto que el propósito
          principal del mismo es abordar diversas temáticas que consideramos de
          gran importancia para la generación de una conciencia ambiental por
          parte de la comunidad educativa, es por esto que, entre las
          actividades planteadas se destacan: el cuidado de la madre tierra,
          soberanía alimentaria, biodiversidad, protección y bienestar de la
          salud física y emocional y el proyecto de vida. La evaluación final
          del PRAE 2023, permitirá replantear esta postura y definirá la
          pertinencia de abordar diversas temáticas durante un mismo año.
        </p>
      </div>
      <PraeCard data={praeData} />
      <StaffTable data={staffData} />
    </div>
  );
}

export default PraePage