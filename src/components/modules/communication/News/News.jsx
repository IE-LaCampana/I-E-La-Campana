import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";

const News = () => {
  const [news] = useState([
    {
      id: 1,
      title: "Nueva Insfrastructura Educativa",
      date: "2025-02-24",
      description:
        "La institución inaugura nuevos espacios de aprendizaje diseñados para mejorar la experiencia educativa de los estudiantes.",
    },
    {
      id: 2,
      title: "Proyecto STEM Destacado",
      date: "2025-02-28",
      description:
        "Estudiantes de grado 10 y 11 presenta innovadores proyectos de robótica en la feria anual de ciencias.",
    },
    {
      id: "3",
      title: "Intercambio Cultural Internacional",
      date: "2025-03-05",
      description:
        "Programa de intercambio con esculas internacionales para fomentar el aprendizaje global y el entendimiendo multicultural.",
    },
    {
      id: 4,
      title: "Reconocimientos Académico",
      date: "2025-02-25",
      description:
        "Tres de nuestros estudiantes obtienen medallas en olimpiadas matematicas nacionales.",
    },
  ]);

  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: isPlaying,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    // Add these to ensure horizontal movement
    centerMode: false,
    variableWidth: false,
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <div className="news-container">
      <Slider ref={sliderRef} {...sliderSettings}>
        {news.map((item) => (
          <div key={item.id} className="news-slide">
            <div className="news-image-placeholder">
              <i className="bi bi-newspaper"></i>
            </div>
            <div className="news-details">
              <h3>{item.title}</h3>
              <p className="news-date">
                <i className="bi bi-calendar me-2"></i>
                {item.date}
              </p>
              <p className="news-description">{item.description}</p>
              <button className="ver-mas-button">
                <i className="bi bi-eye me-2"></i>
                Ver Más
              </button>
            </div>
          </div>
        ))}
      </Slider>
      
        <button className="play-pause-button" onClick={togglePlayPause}>
          {isPlaying ? (
            <>
              <i className="bi bi-pause-fill me-2"></i> Detener
            </>
          ) : (
            <>
              <i className="bi bi-play-fill me-2"></i>
            </>
          )}
        </button>
    </div>
  );
};

export default News;




