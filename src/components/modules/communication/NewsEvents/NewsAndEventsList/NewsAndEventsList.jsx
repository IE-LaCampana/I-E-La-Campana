import React, { useState, useEffect } from "react";
import "./NewsAndEventsList.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Importar datos desde el archivo compartido
import { events, news } from "../../../../../data/newsEventsData";

const NewsAndEventsList = ({
  activeTab: propActiveTab,
  items: propItems,
  onReturn: propOnReturn,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const urlTab = params.get("tab");

  // Si se proporcionan props, úsalas; de lo contrario, usa valores predeterminados
  const [activeTab, setActiveTab] = useState(propActiveTab || urlTab || "news");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Usa los items pasados como props o los datos importados si no hay props
  const currentItems = propItems || (activeTab === "news" ? news : events);

  // Maneja la funcionalidad de volver, usando la prop si está disponible
  const handleReturn = () => {
    if (propOnReturn) {
      propOnReturn();
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  // Función para obtener los elementos de la página actual
  const getCurrentItems = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return currentItems.slice(indexOfFirstItem, indexOfLastItem);
  };

  const totalPages = Math.ceil(currentItems.length / itemsPerPage);

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
    <div className="all-items-view">
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
            <li>{activeTab === "news" ? "Noticias" : "Eventos"}</li>
          </ul>
        </nav>
      </div>
      <div className="all-items-header">
        <h3>{activeTab === "news" ? "Noticias" : "Eventos"}</h3>
      </div>
      <div className="items-grid">
        {getCurrentItems().map((item) => (
          <div key={item.id} className="grid-item">
            <div className="grid-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="grid-item-details">
              <h2>{item.title}</h2>
              <div className="grid-item-date">
                <i className="bi bi-clock me-1"></i>
                {item.date}
              </div>
              <p className="grid-item-description">
                {item.description.length > 100
                  ? `${item.description.substring(0, 100)}...`
                  : item.description}
              </p>
              <Link
                to={`/news-events/${activeTab}/${item.id}`}
                className="read-more-link"
              >
                Leer más <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
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

export default NewsAndEventsList;
