// src/modules/core/design-system/Carousel/Dots.jsx
import React from "react";

const Dots = ({ slides, currentSlide, onDotClick }) => {
  return (
    <div className="headquarters-dots-line">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`headquarters-dot ${
            index === currentSlide ? "active" : ""
          }`}
          onClick={() => onDotClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
