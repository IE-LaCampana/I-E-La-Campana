import React from "react";
import ImageReciclaje from "../../../assets/backgrounds/reciclaje.jpeg";
import "../styles/recyclingHero.css";
import RecyclingInfo from "./RecyclingInfo";
import { recyclingSections } from "../data/recyclingSections";

const RecyclingHero = () => {
  return (
    <section className="recycling-hero">
      <div className="recycling-hero-container">
        <div className="recycling-hero-header">
          <h1 className="recycling-hero-title">Reciclaje</h1>
        </div>

        <div className="recycling-hero-image-wrapper">
          <img
            src={ImageReciclaje}
            alt="Reciclaje"
            className="recycling-hero-image"
          />
        </div>

        <div className="recycling-hero-description-content">
          <p className="recycling-hero-description">
            La práctica del reciclaje en el ámbito escolar constituye una
            estrategia esencial para fomentar, desde edades tempranas, una
            conciencia ambiental sólida. Instruir a estudiantes en la correcta
            separación de residuos y en la valoración de los recursos naturales
            fortalece hábitos sostenibles que pueden perdurar a lo largo de la
            vida. La escuela, como espacio formativo integral, no solo transmite
            conocimientos, sino que también impulsa la responsabilidad colectiva
            frente al cuidado del entorno. Promover estas acciones dentro de la
            comunidad educativa incentiva la colaboración, el trabajo en equipo
            y el compromiso compartido con un objetivo trascendental: preservar
            el planeta para las generaciones presentes y futuras.
          </p>

          {recyclingSections.map((section, index) => (
            <RecyclingInfo
              key={index}
              title={section.title}
              description={section.description}
              points={section.points}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecyclingHero;


