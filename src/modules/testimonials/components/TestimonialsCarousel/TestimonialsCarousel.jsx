import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonialsCarousel.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import { testimonials } from "../../data/testimonialsData";
import { Link, useNavigate } from "react-router-dom";

const TestimonialsCarousel = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} testimonial-prev-arrow`} onClick={onClick}>
        <i className="bi bi-chevron-left"></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`${className} testimonial-next-arrow`} onClick={onClick}>
        <i className="bi bi-chevron-right"></i>
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    dotsClass: "testimonials-slick-dots",
    customPaging: (i) => (
      <button
        type="button"
        className={`testimonials-custom-dot ${
          sliderRef.current &&
          sliderRef.current.innerSlider.state.currentSlide === i
            ? "active"
            : ""
        }`}
      />
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    autoplay: isPlaying,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipe: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    <div className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          <strong>Testimonios</strong> Ex Alumnos
        </h2>
        <p className="testimonials-description">
          Nuestros ex alumnos comparten sus experiencias y cómo el colegio
          Arauco ha impactado sus vidas profesionales y personales.
        </p>
        <div className="testimonials-carousel">
          <Slider ref={sliderRef} {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <TestimonialCard
                  id={testimonial.id}
                  image={testimonial.image}
                  name={testimonial.name}
                  description={testimonial.description}
                  truncateLength={100}
                  showReadMore={false}
                />
              </div>
            ))}
          </Slider>
        </div>
        <button className="testimonials-play-pause" onClick={togglePlayPause}>
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
        <div className="testimonials-ver-mas-container">
          <Link to="/testimonios" className="testimonials-ver-mas">
            <i className="bi bi-eye me-2"></i>Ver Más Testimonios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
