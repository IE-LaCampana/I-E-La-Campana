// Ejemplo de cómo actualizar tu página principal de salidas pedagógicas
import React from "react";
import OutingCard from "../components/OutingCard";
import { getOutingCards } from "../data/outingsData";

const PedagogicalOutings = () => {
  // Obtener todas las tarjetas de salidas
  const outingCards = getOutingCards();

  return (
    <div className="pedagogical-outings-page">
      <div className="container">
        <h1>Salidas Pedagógicas</h1>
        <div className="outings-grid">
          {outingCards.map((outing) => (
            <OutingCard
              key={outing.id}
              id={outing.id}
              title={outing.title}
              subtitle={outing.subtitle}
              location={outing.location}
              backgroundImage={outing.backgroundImage}
              temperature={outing.temperature}
              altitude={outing.altitude}
              duration={outing.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PedagogicalOutings;
