import React, { useState, useEffect } from "react";
import "../styles/libraryCarousel.css";

const LibraryCarousel = ({ slides, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Función para obtener el radio según el tamaño de pantalla
  const getRadius = () => {
    const width = window.innerWidth;
    if (width <= 480) return 180; // Móvil pequeño - espaciado muy reducido
    if (width <= 768) return 220; // Móvil - espaciado reducido
    if (width <= 992) return 260; // Tablet - espaciado medio
    return 320; // Desktop - espaciado completo
  };

  // Rotación automática cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);

        setTimeout(() => {
          setIsAnimating(false);
        }, 800);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length, isAnimating]);

  const getBookStyle = (index) => {
    const totalBooks = slides.length;
    const angleIncrement = (2 * Math.PI) / totalBooks;
    const relativeIndex = (index - currentIndex + totalBooks) % totalBooks;
    const angle = angleIncrement * relativeIndex;

    // Radio responsivo según el tamaño de pantalla
    const radius = getRadius();
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    // Posicionamiento en Y - Ajustado para diferentes tamaños de pantalla
    const width = window.innerWidth;
    let y = 80; // Todos los libros más arriba por defecto

    // Ajustar Y según el tamaño de pantalla
    if (width <= 480) {
      y = 60; // Móvil pequeño
      if (relativeIndex === 0) y = 50; // Libro central
      else if (relativeIndex === 1 || relativeIndex === totalBooks - 1)
        y = 55; // Libros laterales
      else y = 20; // Libros del fondo
    } else if (width <= 768) {
      y = 70; // Móvil
      if (relativeIndex === 0) y = 55; // Libro central
      else if (relativeIndex === 1 || relativeIndex === totalBooks - 1)
        y = 60; // Libros laterales
      else y = 25; // Libros del fondo
    } else if (width <= 992) {
      y = 75; // Tablet
      if (relativeIndex === 0) y = 60; // Libro central
      else if (relativeIndex === 1 || relativeIndex === totalBooks - 1)
        y = 65; // Libros laterales
      else y = 20; // Libros del fondo
    } else {
      // Desktop (original)
      if (relativeIndex === 0) y = 60; // Libro central más arriba
      else if (relativeIndex === 1 || relativeIndex === totalBooks - 1)
        y = 70; // Libros laterales completos más arriba
      else y = 20; // Libros del fondo más arriba para que se vea la mitad
    }

    // Escalado mejorado para mostrar libros laterales completos
    let scale = 1;
    if (relativeIndex === 0) scale = 1.15; // Libro central más grande
    else if (relativeIndex === 1 || relativeIndex === totalBooks - 1)
      scale = 1.0; // Libros laterales COMPLETOS
    else scale = 0.8; // Libros del fondo más pequeños

    const rotateY = (angle * 180) / Math.PI;

    // Opacidad mejorada para mejor visibilidad de libros laterales
    let opacity = 1;
    if (relativeIndex === 1 || relativeIndex === totalBooks - 1) {
      opacity = 0.9; // Libros laterales con buena visibilidad
    } else if (relativeIndex > 1 && relativeIndex < totalBooks - 1) {
      opacity = 0.6; // Libros del fondo con menos opacidad
    }

    return {
      transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
      opacity,
      zIndex: Math.round(1000 + z),
      filter: "none",
    };
  };

  const handleBookClick = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  // Actualizar el componente cuando cambie el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      // Forzar un re-render cuando cambie el tamaño de pantalla
      setCurrentIndex(currentIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <div className="library-carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">{title}</h2>
      </div>

      <div className="carousel-3d-container">
        <div className="carousel-3d-wrapper">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-book ${
                index === currentIndex ? "active" : ""
              }`}
              style={getBookStyle(index)}
              onClick={() => handleBookClick(index)}
            >
              <div className="book-container">
                <div className="book-cover">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="book-image"
                  />
                </div>
                <div className="book-reflection">
                  <img
                    src={slide.image}
                    alt=""
                    className="book-image-reflection"
                  />
                </div>
                <div className="book-title">{slide.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-floor"></div>
    </div>
  );
};

export default LibraryCarousel;
