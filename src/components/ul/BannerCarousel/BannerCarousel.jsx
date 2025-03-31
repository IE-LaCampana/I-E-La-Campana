import React from 'react'
import './BannerCarousel.css';
import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Logo from '../../../components/layouts/Logo/Logo'
import "./BannerCarousel.css";

import WelcomeImage from "../../../assets/banners/WelcomeImage.jpg";
import MisakBand from "../../..//assets/banners/MisakBand.jpg";
import PrescolarImage from "../../../assets/banners/Image-grado.avif";
import PrimeroImage from "../../../assets/banners/Image-grado.avif";
import SegundoImage from "../../../assets/banners/Image-grado.avif";
import TerceroImage from "../../../assets/banners/Image-grado.avif";
import CuartoImage from "../../../assets/banners/Image-grado.avif";
import QuintoImage from "../../../assets/banners/Image-grado.avif";
import SextoImage from "../../../assets/banners/Image-grado.avif";
import SeptimoImage from "../../../assets/banners/Image-grado.avif";
import OctavoImage from "../../../assets/banners/Image-grado.avif";
import NovenoImage from "../../../assets/banners/Image-grado.avif";
import DecimoImage from "../../../assets/banners/Image-grado.avif";
import OnceImage from "../../../assets/banners/Image-grado.avif";


const BannerCarousel = () => {

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null)

    const slides = [
      { image: WelcomeImage, group: "Bienvenida" },
      { image: MisakBand, group: "Misak Band" },
      { image: PrescolarImage, group: "Prescolar" },
      { image: PrimeroImage, group: "1-1" },
      { image: SegundoImage, group: "2-1" },
      { image: TerceroImage, group: "3-1" },
      { image: CuartoImage, group: "4-1" },
      { image: QuintoImage, group: "5-1" },
      { image: SextoImage, group: "6-1" },
      { image: SeptimoImage, group: "7-1" },
      { image: OctavoImage, group: "8-1" },
      { image: NovenoImage, group: "9-1" },
      { image: DecimoImage, group: "10-1" },
      { image: OnceImage, group: "11-1" },
    ];

    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: isPlaying,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      beforeChange: (oldIndex, newIndex) => {
        setCurrentSlide(newIndex);
      },
      appendDots: (dots) => (
        <div className="slick-dots">
          <ul className="custom-dots-container">{dots}</ul>
        </div>
      ),
      customPaging: (i) => (
        <div className={`custom-dot ${i === currentSlide ? "active" : ""}`} aria-label={`Slide ${i + 1}`}></div>
      ),
    };
  
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentSlide)
    }
  }, [currentSlide]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            sliderRef.current.slickPause();
        } else {
            sliderRef.current.slickPlay();
        }
  };
  
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  }
  
  const goToNextSlide = () => {
    sliderRef.current.slickNext();

  }



  return (
    <div className="banner-carousel">
      <div className="group-label">
        {slides[currentSlide].image === WelcomeImage ? (
          <span>Aquí comienzan los grandes sueños</span>
        ) : slides[currentSlide].image === MisakBand ? (
          <span>Misak Band</span>
        ) : (
          <span>
            Grupo <strong>{slides[currentSlide].group}</strong>
          </span>
        )}
      </div>
      <div className='carousel-navigation'>
        <div className='prev-button' onClick={goToPrevSlide}>
          <i className='bi bi-chevron-left'></i>
        </div>
        <div className="control-button" onClick={togglePlayPause}>
          {isPlaying ? (
            <>
              <i className="bi bi-pause-fill"></i> Detener
            </>
          ) : (
            <>
              <i className="bi bi-play-fill"></i>Reproducir
            </>
          )}
        </div>
        <div className="next-button" onClick={goToNextSlide}>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className="background-slider">
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Grupo ${slide.group}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerCarousel