import React from "react";
import FortalezasEmocional from "../../../../assets/backgrounds/fortalezas-emocional.png";
import FortalezasTecnologia from "../../../../assets/backgrounds/fortalezas-tecnologia.png";
import FortalezasCooperativo from "../../../../assets/backgrounds/fortalezas-cooperativo.png";
import FortalezasIdiomas from "../../../../assets/backgrounds/fortalezas-idiomas.png";
import FortalezasDeportes from "../../../../assets/backgrounds/fortalezas-deportes.png";
import FortalezasArtistico from "../../../../assets/backgrounds/fortalezas-artistico.png";
import FortalezasValores from "../../../../assets/backgrounds/fortalezas-valores.png";
import FortalezasBullying from "../../../../assets/backgrounds/fortalezas-bullying.png";
import FortalezasLectura from "../../../../assets/backgrounds/fortalezas-lectura.png";
import IdentidadCulturalMisak from "../../../../assets/backgrounds/Identidad-cultural-misak.png";
import "./OurStrengths.css";

const OurStrengths = () => {
  const strengths = [
    {
      id: 1,
      title: "Inteligencia emocional",
      image: FortalezasEmocional,
    },
    {
      id: 2,
      title: "Educación 3.0",
      image: FortalezasTecnologia,
    },
    {
      id: 3,
      title: "Aprendizaje cooperativo",
      image: FortalezasCooperativo,
    },
    {
      id: 4,
      title: "Idiomas, una prioridad",
      image: FortalezasIdiomas,
    },
    {
      id: 5,
      title: "El deporte como aliado",
      image: FortalezasDeportes,
    },
    {
      id: 6,
      title: "Desarrollo artístico",
      image: FortalezasArtistico,
    },
    {
      id: 7,
      title: "Formación en valores",
      image: FortalezasValores,
    },
    {
      id: 8,
      title: "No al bullying",
      image: FortalezasBullying,
    },
    {
      id: 9,
      title: "Lectura comprensiva",
      image: FortalezasLectura,
    },
    {
      id: 10,
      title: "Identidad cultural Misak",
      image: IdentidadCulturalMisak,
    },
  ];

  return (
    <div className="our-strengths-container">
      <h2 className="our-strengths-title">
        <strong>NUESTRAS FORTALEZAS</strong> EDUCATIVAS
      </h2>
      <p className="our-strengths-description">
        Nuestro compromiso con los alumnos y sus familias es ofrecer una
        formación integral, más allá del plan académico, ayudándolos a reconocer
        en sí mismos sus fortalezas y enseñándoles a gestionar los retos del
        futuro. Para ello trabajamos desde la ilusión, fomentando la cultura del
        trabajo, potenciando el dominio de los idiomas e inculcándoles una
        educación en valores que contribuya tanto a su desarrollo humano como
        profesional.
      </p>
      <div className="strengths-grid">
        {strengths.map((strength, index) => (
          <div key={index} className="strength-item">
            <div className="strength-icon">
              <img src={strength.image} alt={strength.title} />
            </div>
            <h3 className="strength-title">{strength.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStrengths;
