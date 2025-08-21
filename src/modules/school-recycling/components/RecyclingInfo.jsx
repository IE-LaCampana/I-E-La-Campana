import React from "react";
import "../styles/recyclingInfo.css";

const RecyclingInfo = ({ title, description, points }) => {
  return (
    <section className="recycling-info-container">
      <h2 className="recycling-info-title">{title}</h2>
      <p className="recycling-info-description">{description}</p>
      <ul className="recycling-info-list">
        {points.map((point, index) => (
          <li key={index} className="recycling-info-item">
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecyclingInfo;

