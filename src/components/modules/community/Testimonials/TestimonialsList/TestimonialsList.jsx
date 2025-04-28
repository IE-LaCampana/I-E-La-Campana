import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TestimonialsList.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

// Importar datos desde el archivo compartido
import { testimonials } from "../../../../../data/testimonialsData";

const TestimonialsList = ({ onReturn }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Función para obtener los elementos de la página actual
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return testimonials.slice(indexOfFirstItem, indexOfLastItem);
  };

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage < 5) {
        pages.push(2, 3, 4, 5, "...", totalPages);
      } else if (currentPage > totalPages - 4) {
        pages.push(
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="all-testimonials-view">
      <div className="breadcrumb">
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
            <li>Testimonios Ex Alumnos</li>
          </ul>
        </nav>
      </div>
      <div className="all-testimonials-header">
        <h3>Testimonios Ex Alumnos</h3>
      </div>
      <div className="testimonials-grid">
        {getCurrentItems().map((testimonial) => (
          <div key={testimonial.id} className="grid-item">
            <TestimonialCard
              id={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              description={testimonial.description}
              truncateLength={100}
              showReadMore={true}
            />
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <div className="pagination">
          <button
            className="pagination-button"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {getPageNumbers().map((number, index) => (
            <button
              key={index}
              className={`pagination-button ${
                number === currentPage ? "active" : ""
              } ${number === "..." ? "ellipsis" : ""}`}
              onClick={() => number !== "..." && paginate(number)}
              disabled={number === "..."}
            >
              {number}
            </button>
          ))}

          <button
            className="pagination-button"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsList;
