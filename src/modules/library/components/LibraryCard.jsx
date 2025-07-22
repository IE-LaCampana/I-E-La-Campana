import React from 'react'
import Biblioteca from "../../../assets/backgrounds/biblioteca.png";
import "../styles/libraryCard.css";

 const LibraryCard = () => {
  return (
    <div className="library-card">
      <div className="library-card-image">
        <img src={Biblioteca} alt="" />
      </div>
      <div className="library-card-content">
        <h2 className="library-card-title">
          <strong>Biblioteca </strong>
          La Campana
        </h2>
        <p className="library-card-description">
          La biblioteca motiva e incentiva en los estudiantes la lectura,
          investigación y consulta, fortaleciendo su aprendizaje y afianzando
          las habilidades lectoras por medio del uso de material disponible.
        </p>
        <p className="library-card-resources">
          Dispone de un fondo bibliográfico de más de 7.000 recursos entre
          libros, medios audiovisuales y publicaciones, para fomentar el placer
          por la lectura y la investigación.
        </p>
      </div>
    </div>
  );
}

export default LibraryCard;
