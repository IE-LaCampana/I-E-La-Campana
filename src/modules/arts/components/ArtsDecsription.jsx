import React from "react";
import "../styles/artsDecsription.css";

 const ArtsDescription = ({ data }) => {
  // Tomar solo el primer elemento del array para mostrar en la página de detalle
  const descriptionData = data && data.length > 0 ? data[0] : null;

  if (!descriptionData) {
    return (
      <div className="arts-decsription-container">
        <div className="arts-decsription-content">
          <p className="arts-decsription-content-p">
            No hay descripción disponible para este arte.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="arts-decsription-container">
      <div className="arts-decsription-content">
        {/* Título opcional */}
        {descriptionData.title && (
          <h2 className="arts-decsription-title">{descriptionData.title}</h2>
        )}

        {/* Descripción principal */}
        <p className="arts-decsription-content-p">
          {descriptionData.description}
        </p>
      </div>
    </div>
  );
};

export default ArtsDescription;