import React, { useRef, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import "./Events.css";

const Events = () => {
  const [events] = useState([
    {
      id: 1,

      title: "Votaciones",

      date: "2025-02-24 00:00:00",

      description:
        "El próximo 7 de marzo se realizarán las elecciones escolares en el marco del día de la democracia escolar, donde los estudiantes tendrán la posibilidad de elegir entre sus candidatos a personería, contraloría y este año el líder deportivo...",
    },

    {
      id: 2,

      title: "Feria de Ciencias",

      date: "2025-03-15 14:00:00",

      description:
        "Presentación de proyectos de científicos e innovadores de todos los grados, con jurados invitados de universidades locales",
    },

    {
      id: 3,

      title: "Jornada Deportiva",

      date: "2025-03-22 10:00:00",

      description:
        "Competecias deportivas entre cursos, incluyendo fútbol, baloncesto, voleibol y actividades de integración.",
    },

    {
      id: 4,

      title: "Semana Cultural",

      date: "2025-04-05 08:00:00",

      description:
        "Semana dedicada a celebrar la diversidad cultural con presentaciones artísticas, musicales y talleres de expresión.",
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

    swipe: true,

    accessibility: true,

    centerMode: false,

    variableWidth: false,
  };

  const TogglePlayPause = () => {
    setIsPlaying(!isPlaying);

    if (isPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <div className="events-container">
      <Slider ref={sliderRef} {...sliderSettings}>
        {events.map((event) => (
          <div key={event.id} className="event-slide">
            <div className="event-image-placeholder">
              <i className="bi bi-calendar-event"></i>
            </div>

            <div className="event-details">
              <h3>{event.title}</h3>

              <p className="event-date">
                <i className="bi bi-clock me-2"></i>

                {event.date}
              </p>

              <p className="event-description">{event.description}</p>

              <button className="ver-mas-button">
                {" "}
                <i className="bi bi-eye me-2"></i>Ver Más
              </button>
            </div>
          </div>
        ))}
      </Slider>
        <button className="play-pause-button" onClick={TogglePlayPause}>
          {isPlaying ? (
            <>
              <i className="bi bi-pause-fill me-2"></i> Detener
            </>
          ) : (
            <>
              <i className="bi bi-play-fill me-2"></i> Reproducir
            </>
          )}
        </button>
    </div>
  );
};

export default Events;




