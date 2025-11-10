import React from "react";
import "../styles/rectorCard.css";

const RectorCard = ({ data }) => {
    if (!data || !data.sections) {
    return <div>No hay datos disponibles</div>;
    }
    
  return (
    <div className="rector-card">
      <div className="rector-card__image-container">
        <img src={data.image} alt={data.name} className="rector-card__image" />
      </div>
      <div className="rector-card__content">
        <h2 className="rector-card__name ">{data.name}</h2>
        <p className="rector-card__position">{data.position}</p>
        {data.sections.map((section, idx) => (
          <div className="rector-card__section" key={idx}>
            <h3 className="rector-card__section-title">{section.title}</h3>
            {section.content?.map((p, pIdx) => (
              <p key={pIdx} className="rector-card__paragraph">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RectorCard;


