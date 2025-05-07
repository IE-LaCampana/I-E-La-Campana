import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./TestimonialDetails.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Cenefa from "../../../../../assets/institutional/CENEFA.png";
import { testimonials } from "../../../../../data/testimonialsData";

const TestimonialDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [testimonial, setTestimonial] = useState(null);

  useEffect(() => {
    const foundTestimonial = testimonials.find(
      (item) => item.id === parseInt(id)
    );

    if (foundTestimonial) {
      setTestimonial(foundTestimonial);
    } else {
      navigate("/testimonios");
    }
  }, [id, navigate]);

  if (!testimonial) {
    return (
      <div className="testimonial-details-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-details-container">
      <div className="breadcrumbd">
        <nav>
          <ul>
            <li>
              <Link to="/" className="inicio">
                Inicio
              </Link>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i>
            </li>
            <li>
              <Link to="/testimonios" className="testimonios">
                Testimonios Ex Alumnos
              </Link>
            </li>
            <li>
              <i className="bi bi-chevron-right"></i>
            </li>
            <li>{testimonial.name}</li>
          </ul>
        </nav>
      </div>

      <div className="testimonial-details-header">
        <h2 className="testimonial-details-title">Testimonio de Ex Alumno</h2>
      </div>
      <div className="testimonial-details-wrapper">
        <div className="testimonial-details-content">
          <div className="testimonial-details-profile">
            <TestimonialCard
              id={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              isDetailView={true}
              className="testimonial-details-card"
            />
            <div className="testimonial-details-decoration">
              <i className="bi bi-quote"></i>
            </div>
          </div>

          <div className="testimonial-details-decorative-line">
            <img src={Cenefa} alt="" />
          </div>

          <div className="testimonial-details-text">
            {testimonial.fullDescription &&
              testimonial.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
          <div className="testimonial-meta">
            <span className="testimonial-carrera">
              {testimonial.nivelEducativo}
            </span>
            <span className="testimonial-promocion">
              Promoción {testimonial.promocion}
            </span>
          </div>

          <div className="testimonial-details-decorative-line">
            <img src={Cenefa} alt="" />
          </div>
        </div>

        <div className="testimonial-details-navigation">
          <button
            className="testimonial-nav-button prev"
            onClick={() => {
              const prevId = testimonial.id - 1;
              if (prevId >= 1) {
                navigate(`/testimonios/${prevId}`);
              }
            }}
            disabled={testimonial.id === 1}
          >
            <i className="bi bi-arrow-left"></i> Testimonio anterior
          </button>

          <button
            className="testimonial-nav-button next"
            onClick={() => {
              const nextId = testimonial.id + 1;
              if (nextId <= testimonials.length) {
                navigate(`/testimonios/${nextId}`);
              }
            }}
            disabled={testimonial.id === testimonials.length}
          >
            Siguiente <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialDetails;
