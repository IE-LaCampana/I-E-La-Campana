import React, { useRef, useState } from "react";
import Testimonios from "../../../../assets/backgrounds/Testimonio.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AlumniTestimonials.css";

const AlumniTestimonials = () => {
  const exTestimonials = [
    {
      id: 1,
      image: Testimonios,
      name: "Nicolás Ortiz",
      description:
        "La Institución Educativa La Campana marcó profundamente mi formación. El compromiso académico y la calidad humana del cuerpo docente me brindaron bases sólidas. Los valores y conocimientos adquiridos continúan guiando mi ejercicio médico.",
    },
    {
      id: 2,
      image: Testimonios,
      name: "Antonia Agaud",
      description:
        "Gracias a la Institución Educativa La Campana desarrollé pensamiento crítico, herramienta clave en mi carrera en Derecho. La exigencia académica, los espacios de debate y el trabajo en equipo fortalecieron mis capacidades argumentativas.",
    },
    {
      id: 3,
      image: Testimonios,
      name: "Marco Sepúlveda",
      description:
        "En la Institución Educativa La Campana nació mi vocación por la ingeniería. El enfoque científico, los retos prácticos y la guía constante de los docentes me ofrecieron herramientas valiosas que aún hoy aplico en mi trayectoria profesional.",
    },
    {
      id: 4,
      image: Testimonios,
      name: "Valentina Morales",
      description:
        "La Institución Educativa La Campana despertó mi pasión por la ciencia. Gracias al club de ciencias, la motivación de los docentes y el enfoque integral, descubrí mi camino hacia la investigación biomédica y el trabajo colaborativo.",
    },
    {
      id: 5,
      image: Testimonios,
      name: "Javier Fuentes",
      description:
        "La formación que recibí en la Institución Educativa La Campana integró arte y técnica, fundamentales en mi carrera como arquitecto. Valoro la visión humanista y ambiental que me fue transmitida con dedicación y profesionalismo.",
    },
    {
      id: 6,
      image: Testimonios,
      name: "Carolina Vásquez",
      description:
        "El espíritu emprendedor que cultivé en la Institución Educativa La Campana fue determinante. Las experiencias de liderazgo, trabajo en equipo y responsabilidad social fueron clave en mi desarrollo como profesional comprometida.",
    },
    {
      id: 7,
      image: Testimonios,
      name: "Rodrigo Mendoza",
      description:
        "Mi vocación por la historia se forjó en la Institución Educativa La Campana. Los docentes me enseñaron a analizar el pasado con sentido crítico. Hoy ejerzo la docencia inspirado por la misma entrega que recibí como estudiante.",
    },
    {
      id: 8,
      image: Testimonios,
      name: "Daniela Soto",
      description:
        "En la Institución Educativa La Campana descubrí el periodismo a través del periódico escolar. Aprendí a comunicar con ética y rigor. La formación integral que recibí sigue siendo la base de mi ejercicio profesional como periodista.",
    },
  ];


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
          slideaToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slideaToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideaToScroll: 1,
        },
      },
    ],
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
            {exTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-avatar">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-image"
                    />
                  </div>
                  <div className="testimonial-content">
                    <p className="testimonial-text">
                      {testimonial.description}
                    </p>
                    <h2 className="testimonial-name">{testimonial.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button className="testimonials-play-pause" onClick={TogglePlayPause}>
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
          <button className="testimonials-ver-mas">
            <i className="bi bi-eye me-2"></i>Ver Más Testimonios
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumniTestimonials;  