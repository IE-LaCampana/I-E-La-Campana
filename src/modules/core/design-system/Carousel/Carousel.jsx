// Carousel/Carousel.js
import React, { useRef, useState, useEffect } from "react";
import NavigationArrows from "./NavigationArrows";
import PlayPauseButton from "./PlayPauseButton";
import Dots from "./Dots";
import GroupLabel from "./GroupLabel";
import "./Carousel.css";

const Carousel = ({
  slides,
  showGroupLabel = false,
  navigationStyle = "headquarters", // "headquarters" | "banner"
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      slideIntervalRef.current = setInterval(() => {
        goToNextSlide();
      }, 5000);
    }

    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, [isPlaying, currentSlide]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSpecificSlide = (index) => {
    setCurrentSlide(index);
  };

  const renderNavigation = () => {
    if (navigationStyle === "banner") {
      // Navegación estilo banner con puntos centrados
      return (
        <div className="banner-carousel-dots">
          <div className="custom-dots-container">
            {slides.map((slide) => (
              <div
                key={slide.id || slide.image}
                className={`custom-dot ${
                  slides.indexOf(slide) === currentSlide ? "active" : ""
                }`}
                onClick={() => goToSpecificSlide(slides.indexOf(slide))}
                aria-label={`Slide ${slides.indexOf(slide) + 1}`}
              />
            ))}
          </div>
        </div>
      );
    }

    // Navegación estilo headquarters (por defecto)
    return (
      <div className="headquarters-navigation-line">
        <div
          className="headquarters-arrow left-arrow"
          onClick={goToPrevSlide}
        />

        <Dots
          slides={slides}
          currentSlide={currentSlide}
          onDotClick={goToSpecificSlide}
        />

        <div
          className="headquarters-arrow right-arrow"
          onClick={goToNextSlide}
        />
      </div>
    );
  };

  return (
    <div className="headquarters-carousel">
      <div className="headquarters-slider" ref={sliderRef}>
        <div
          className="headquarters-slides-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id || slide.image} className="headquarters-slide">
              <img src={slide.image} alt={slide.title || slide.label} />
            </div>
          ))}
        </div>
      </div>

      {/* Group Label - Solo se muestra si showGroupLabel es true */}
      {showGroupLabel && (
        <GroupLabel
          currentSlide={slides[currentSlide]}
          slideIndex={currentSlide}
        />
      )}

      {/* Navegación dinámica según el estilo */}
      {renderNavigation()}

      <PlayPauseButton isPlaying={isPlaying} onToggle={togglePlayPause} />
    </div>
  );
};

export default Carousel;
