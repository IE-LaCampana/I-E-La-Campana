import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewsEvents.css";

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState("news");


  // Datos de eventos
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
      title: "Jornada Deportiva",
      date: "2025-03-22 10:00:00",
      description:
        "Competecias deportivas entre cursos, incluyendo fútbol, baloncesto, voleibol y actividades de integración.",
    },
    {
      id: 3,
      title: "Semana Cultural",
      date: "2025-04-05 08:00:00",
      description:
        "Semana dedicada a celebrar la diversidad cultural con presentaciones artísticas, musicales y talleres de expresión.",
    },
    {
      id: 4,
      title: "Día de la Lengua Materna",
      date: "2025-02-21",
      description:
        "Jornada de reflexión sobre la importancia de preservar y promover el uso de la lengua materna en nuestra comunidad. Se realizarán actividades culturales, recitales y talleres de sensibilización para fortalecer nuestra identidad lingüística.",
    },
    {
      id: 5,
      title: "Día de la Mujer",
      date: "2025-03-07",
      description:
        "Celebración dedicada al reconocimiento de los derechos, logros y aportes de las mujeres en nuestra sociedad. Habrá conferencias, foros y actividades artísticas para promover la igualdad y el respeto.",
    },
    {
      id: 6,
      title: "Día del Agua",
      date: "2025-03-22",
      description:
        "Concientización sobre el uso sostenible del agua y su impacto en el planeta. Se llevarán a cabo charlas educativas, actividades ecológicas y una jornada de limpieza de fuentes hídricas cercanas.",
    },
    {
      id: 7,
      title: "Día del Niño",
      date: "2025-04-25",
      description:
        "Día especial para los más pequeños con actividades recreativas, juegos, presentaciones artísticas y dinámicas para resaltar la importancia de la infancia y el derecho a la felicidad y educación.",
    },
    {
      id: 8,
      title: "Feria Universitaria",
      date: "2025-05-10",
      description:
        "Espacio de orientación vocacional donde universidades y centros de formación presentan sus programas académicos. Se ofrecerán charlas, asesorías y stands informativos para estudiantes de último grado.",
    },
    {
      id: 8,
      title: "Día del Maestro",
      date: "2025-05-16",
      description:
        "Agradecimiento y reconocimiento a la labor de los docentes. Se realizarán homenajes, actividades especiales y entrega de reconocimientos por su dedicación en la enseñanza.",
    },
    {
      id: 8,
      title: "Día del Estudiante",
      date: "2025-06-06",
      description:
        "El Día del Estudiante reconoce el esfuerzo y dedicación de los estudiantes en su formación académica. Se organizan encuentros, charlas motivacionales y eventos deportivos para incentivar la excelencia académica y el liderazgo estudiantil dentro de la comunidad educativa..",
    },
    {
      id: 8,
      title: "Día de la Bandera",
      date: "2025-06-28",
      description:
        "Ceremonia especial para rendir homenaje a la bandera nacional con izadas, discursos patrióticos y reflexiones sobre la importacia de los símbolos patricios. Se reforzarán los valores de la entidad y pertenecia cultural en toda la comunidad educativa.",
    },
    {
      id: 8,
      title: "Día de la Recuperación de la tierra",
      date: "2025-07-19",
      description:
        "Jornada de reflexion sobre el respeto y la conservación de la tierra con actividades ambientales, plantación de árboles y exposiciones sobre la historia y el significado de de la recuperación de tierras ancestrales.",
    },
    {
      id: 8,
      title: "Conmemoración de la Misak Educación",
      date: "2025-07-16",
      description:
        "Semana dedicada a la educación en la comunidad Misak, con eventos académicos, presentaciones culturales y talleres sobre la identidad y la historia de la comunidad.",
    },
    {
      id: 8,
      title: "Día de la Mujer Indíjena",
      date: "2025-09-05",
      description:
        "Celebración de honor a la mujer indíjena con encuentros, foros y muestras culturales que resaltan su importancia en la comunidad. Se compartirán experiencias y conocimientos sobre el rol de la mujer en la preservación de la tradición y la cultura indígena.",
    },
    {
      id: 8,
      title: "Día de las Ofrendas",
      date: "2025-10-31",
      description:
        "Evento en el que se realizan ofrendas en agradecimiento a la tierra y a los ancestros. Se llevarán a cabo rituales, danzas tradicionales y charlas sobre el significado de esta fecha en la cosmovisión indígena y cultural.",
    },
    {
      id: 8,
      title: "Día Internacional de los Derechos de los Pueblos Indigenas",
      date: "2025-11-06",
      description:
        "Jornada de sensibilización y reflexión sobre los derechos de los peublos indpigenas con charlas, exposiciones y foros de discusión. Se promoverá el respeto, la incluision y la valoración de la diversidad cultural en la sociendad.",
    },
  ]);

  // Datos de noticias
  const [news] = useState([
    {
      id: 1,
      title: "Finalización del primer periodo de clases",
      date: "2025-04-11",
      description:
        "El primer periodo académico concluye, dando cierre a una etapa de aprendizaje y esfuerzo. Los estudiantes recibirán sus informes de desempeño y tendrán un tiempo de descanso antes de inicio del segundo periodo, donde continuarán con nuevos retos.",
    },
    {
      id: 2,
      title: "Inicio del 2° perido de clases",
      date: "2025-04-22",
      description:
        "Inicia el segundo periodo escolar, marcando la mitad del año académico. Se evaluará el rendimiento estudiantil y se entregarán informes. A continuación, iniciará un receso importante antes del comienzo del tercer periodo de clases en el colegio.",
    },
    {
      id: 3,
      title: "Inicio del 3° periodo de clases",
      date: "2025-08-19",
      description:
        "Comienza el tercer y último perido escolar del año. Los estudiantes enfrentarán nuevos desafíos y reforzarán sus conocimientos en preparación para las evaluaciones finales, consolidando todo loa aprendido en las etapas anteriores del año académico.",
    },
    {
      id: 4,
      title: "Finalizacion del 3° perido de clases",
      date: "2025-02-25",
      description:
        "El año escolar llega a su fin con la culminación del tercer periodo . Se llevarán a cabo las evaluaciónes finales y actividades de cierre. Los estudiantes recibirán sus calificaciones y participarán en ceremonias de graduación y reconocimientos.",
    },
    {
      id: 4,
      title: "Vacaciones para estudiantes",
      date: "2025-06-09",
      description:
        "Los estudiantes disfrutarán de un merecido descanso entre el 9 y el 30 de junio. Durante este tiempo podrán relajarse. compartir con sus familias y prepararsepara el inicio del próximo periodo, aprobechando el tiempo libre para las actividades recreativas.",
    },
    {
      id: 4,
      title: "Vacaciones de docentes",
      date: "2025-06-16",
      description:
        "Los docentes trendrán su periodo de vacaciones del 16 al 30 de junio y posteriormente del 9 de diciembre al 11 de enero de 2026. Este descanso permitirá la planificación de nuevas estrategias pedagógicas para mejorar la enseñanza en el próximo ciclo.",
    },
    {
      id: 4,
      title: "Entrega de boletines académicos",
      date: "2025-07-02",
      description:
        "Se realizará la entrega de boletines académicos a los padres de familia y estudiantes. Sera un momento clave para evaluar el desempeño escolar y recibir retroalimentación sobre las fortalezas y aspectos a mejorar en cada una de las asignaturas.",
    },
    { 
      id: 4,
      title: "Jornada de vacunación estudiantil",
      date: "2025-09-10",
      description:
        "Se llevará a cabo una jornada de vacunación para todos los estudiantes de la institución. El personal de salud administrará vacunas esenciales para reforzar la protección ante enfermedades, promoviendo la salud y el bienestar de la comunidad escolar.",
    },
  ]);

  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} custom-prev-arrow`} onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={`${className} custom-next-arrow`} onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots news-events-slick-dots",
    customPaging: (i) => (
      <button
        type="button"
        className={`news-events-custom-dot ${
          sliderRef.current &&
          sliderRef.current.innerSlider.state.currentSlide === i
            ? "active"
            : ""
        }`}
      />
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
    <div className="news-events-container">
      <div className="news-events">
        <h2 className="section-title">
          <strong>CREAMOS</strong>FOTURO
        </h2>
        <p className="section-subtitle">
          Ser parte de La Campaña es estar siempre informado sobre las novedades
          de nuestra institución y comunidad educativa.
        </p>
      </div>

      <div className="news-events-tabs">
        <button
          className={`tab-button ${activeTab === "events" ? "active" : ""}`}
          data-tab="events"
          onClick={() => setActiveTab("events")}
        >
          <span className="tab-button-events">NUESTROS EVENTOS</span>
        </button>
        <button
          className={`tab-button ${activeTab === "news" ? "active" : ""}`}
          data-tab="news"
          onClick={() => setActiveTab("news")}
        >
          <span className="tab-button-news">NUESTRAS NOTICIAS</span>
        </button>
      </div>

      <div className="news-events-content">
        {activeTab === "news" ? (
          <div className="events-container">
            <Slider ref={sliderRef} {...sliderSettings}>
              {news.map((newsItem) => (
                <div key={newsItem.id} className="event-slide">
                  <div className="event-image-placeholder">
                    <i className="bi bi-newspaper"></i>
                  </div>

                  <div className="event-details">
                    <h3>{newsItem.title}</h3>

                    <p className="event-date">
                      <i className="bi bi-clock me-2"></i>
                      {newsItem.date}
                    </p>

                    <p className="event-description">{newsItem.description}</p>
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
            <button className="ver-mas-button">
              <i className="bi bi-eye me-2"></i>Ver Más Noticias
            </button>
          </div>
        ) : (
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
            <button className="ver-mas-button">
              <i className="bi bi-eye me-2"></i>Ver Más Eventos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsEvents;
