import React, { useRef, useState, useEffect } from "react";
import "../../styles/headquarterImageCarousel.css";
import { laCampanaImages } from "../../data/LaCampanaCarouselData";

const HeadquarterImageCarousel = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideIntervalRef = useRef(null);

  const slides = laCampanaImages;

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

  return (
    <div className="headquarters-carousel">
      <div className="headquarters-slider" ref={sliderRef}>
        <div
          className="headquarters-slides-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="headquarters-slide">
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="headquarters-navigation-line">
        <div
          className="headquarters-arrow left-arrow"
          onClick={goToPrevSlide}
        ></div>

        <div className="headquarters-dots-line">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`headquarters-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSpecificSlide(index)}
            ></div>
          ))}
        </div>

        <div
          className="headquarters-arrow right-arrow"
          onClick={goToNextSlide}
        ></div>
      </div>

      <div className="headquarters-play-pause" onClick={togglePlayPause}>
        {isPlaying ? (
          <>
            <span className="pause-icon"></span>
            Detener
          </>
        ) : (
          <>
            <span className="play-icon"></span>
            Reproducir
          </>
        )}
      </div>
    </div>
  );
};

export default HeadquarterImageCarousel;
