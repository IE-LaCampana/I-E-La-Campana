import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/outingsCarousel.css";

const OutingsCarousel = ({
  data = [],
  autoplaySpeed = 4000,
  fadeSpeed = 1000,
  showDots = true,
  showArrows = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZooming, setIsZooming] = useState(true);

  // Componente para la flecha anterior personalizada (izquierda)
  const OutingsCarouselPrevArrow = ({ onClick }) => (
    <div className="outings-carousel-prev-arrow" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </div>
  );

  // Componente para la flecha siguiente personalizada (derecha)
  const OutingsCarouselNextArrow = ({ onClick }) => (
    <div className="outings-carousel-next-arrow" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </div>
  );

  // Configuración del carrusel
  const settings = {
    dots: showDots,
    infinite: true,
    speed: fadeSpeed,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    fade: false,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: showArrows,
    prevArrow: showArrows ? <OutingsCarouselPrevArrow /> : false,
    nextArrow: showArrows ? <OutingsCarouselNextArrow /> : false,
    beforeChange: (current, next) => {
      setIsZooming(false);
      setTimeout(() => {
        setCurrentSlide(next);
        setIsZooming(true);
      }, 500);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: showArrows,
          dots: true,
          autoplaySpeed: autoplaySpeed,
          prevArrow: showArrows ? <OutingsCarouselPrevArrow /> : false,
          nextArrow: showArrows ? <OutingsCarouselNextArrow /> : false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: showArrows,
          dots: true,
          autoplaySpeed: autoplaySpeed,
          prevArrow: showArrows ? <OutingsCarouselPrevArrow /> : false,
          nextArrow: showArrows ? <OutingsCarouselNextArrow /> : false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: showArrows,
          dots: true,
          autoplaySpeed: 3500,
          prevArrow: showArrows ? <OutingsCarouselPrevArrow /> : false,
          nextArrow: showArrows ? <OutingsCarouselNextArrow /> : false,
        },
      },
    ],
  };

  // Efecto para reiniciar el zoom cuando cambia la diapositiva
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsZooming(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // Si no hay datos, mostrar mensaje
  if (!data || data.length === 0) {
    return (
      <div className="outings-carousel-container">
        <div className="outings-carousel-wrapper">
          <div className="outings-carousel-no-images-message">
            <p>No hay imágenes disponibles para mostrar</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="outings-carousel-container">
      <div className="outings-carousel-wrapper">
        <Slider {...settings}>
          {data.map((slide, index) => (
            <div key={slide.id || index} className="outings-carousel-slide">
              <div className="outings-carousel-content">
                <div className="outings-carousel-image-container">
                  <img
                    src={slide.image || slide.src}
                    alt={slide.title}
                    className={`outings-carousel-image ${
                      isZooming && index === currentSlide
                        ? "outings-carousel-zoom-in"
                        : "outings-carousel-zoom-out"
                    }`}
                    onError={(e) => {
                      console.log(
                        `Error cargando imagen: ${slide.image || slide.src}`
                      );
                    }}
                  />
                  <div className="outings-carousel-overlay">
                    <div className="outings-carousel-text-content">
                      <h2 className="outings-carousel-title">{slide.title}</h2>
                      <p className="outings-carousel-description">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OutingsCarousel;
