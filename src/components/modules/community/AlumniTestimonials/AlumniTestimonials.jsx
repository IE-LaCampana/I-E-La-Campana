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
        "La Campana marcó mi vida profesional. El rigor académico y el apoyo docente me brindaron una base sólida. Aprendí conocimientos y valores que aplico día a día en mi consulta médica. Estoy agradecido por la inspiración de mis profesores y su compromiso.",
    },
    {
      id: 2,
      image: Testimonios,
      name: "Antonia Agaud",
      description:
        "Gracias a La Campana aprendí a pensar críticamente. Esta habilidad ha sido esencial en mi carrera de Derecho. La disciplina, los debates y el trabajo en grupo me prepararon para la universidad y fortalecieron mi capacidad argumentativa en cada caso.",
    },
    {
      id: 3,
      image: Testimonios,
      name: "Marco Sepúlveda",
      description:
        "En La Campana nació mi pasión por la ingeniería. Los desafíos prácticos, el enfoque científico y el compromiso docente me dieron herramientas sólidas. La ética y el pensamiento lógico que aprendí siguen guiando mi labor profesional tras más de 15 años.",
    },
    {
      id: 4,
      image: Testimonios,
      name: "Valentina Morales",
      description:
        "La Campana despertó mi vocación científica. El enfoque integral, la motivación docente y el club de ciencias me impulsaron hacia la investigación biomédica. Allí desarrollé también habilidades sociales clave que hoy aplico en mi carrera profesional.",
    },
    {
      id: 5,
      image: Testimonios,
      name: "Javier Fuentes",
      description:
        "La Campana unió creatividad y técnica, esenciales en mi carrera de arquitectura. El arte, la ciencia y el respeto por el entorno fueron pilares en mi formación. Valoro profundamente a quienes guiaron mi visión profesional con tanta dedicación.",
    },
    {
      id: 6,
      image: Testimonios,
      name: "Carolina Vásquez",
      description:
        "El espíritu emprendedor que desarrollé en La Campana definió mi camino. Aprendí sobre liderazgo, trabajo en equipo y responsabilidad. Las experiencias en el centro de alumnos y los proyectos formativos fueron clave en mi desarrollo profesional.",
    },
    {
      id: 7,
      image: Testimonios,
      name: "Rodrigo Mendoza",
      description:
        "La pasión por la historia nació en La Campana. Los docentes me enseñaron a comprender el pasado con sentido crítico. Esta formación humanista marcó mi vocación docente. Hoy enseño con la misma dedicación y respeto que un día me inspiraron.",
    },
    {
      id: 8,
      image: Testimonios,
      name: "Daniela Soto",
      description:
        "La Campana me acercó al periodismo mediante el debate y el periódico escolar. Aprendí a investigar y comunicar con responsabilidad. La formación ética y el respeto a la diversidad de opiniones siguen guiando mi labor como periodista cada día.",
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