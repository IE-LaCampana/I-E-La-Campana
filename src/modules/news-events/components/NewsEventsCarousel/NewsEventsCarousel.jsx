import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/newsEventsCarousel.css";
import NewsAndEventsList from "../../components/NewsAndEventsList/NewsAndEventsList";
import { Link } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

// Importar los datos desde el archivo compartido
import { events, news } from "../../data/newsEventsData";

const NewsEventsCarousel = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [viewMode, setViewMode] = useState("carousel");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (viewMode === "carousel" && sliderRef.current) {
      sliderRef.current.slickGoTo(0);
      setIsPlaying(true);
    }
  }, [activeTab, viewMode]);

  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} custom-prev-arrow`} onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
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

  const showAllItems = () => {
    setViewMode("grid");
    setCurrentPage(1);
  };

  const returnToCarousel = () => {
    setViewMode("carousel");
  };

  const currentItems = activeTab === "news" ? news : events;

  return (
    <div className="news-events-container">
      <div className="news-events">
        <h2 className="section-title">
          <strong>CREAMOS</strong>FUTURO
        </h2>
        <p className="section-subtitle">
          Ser parte de la campaña es estar siempre informado sobre las novedades
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
        {viewMode === "carousel" ? (
          <div className="events-container">
            <Slider ref={sliderRef} {...sliderSettings}>
              {currentItems.map((item) => (
                <NewsCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                />
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

            <div className="news-events-ver-mas-button">
              <Link
                to={`/news-events?tab=${activeTab}`}
                className="ver-mas-button"
              >
                <i className="bi bi-eye me-2"></i> Ver Más{" "}
                {activeTab === "news" ? "Noticias" : "Eventos"}
              </Link>
            </div>
          </div>
        ) : (
          <NewsAndEventsList
            activeTab={activeTab}
            items={currentItems}
            onReturn={returnToCarousel}
          />
        )}
      </div>
    </div>
  );
};

export default NewsEventsCarousel;
