import { useState, useEffect } from "react";
import "./BackToTop.css";

import React from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const togleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", togleVisibility);

    return () => window.removeEventListener("scroll", togleVisibility);
  }, []);

  const scrollTopTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="back-to-top-container">
          <div className="back-to-top-text">Volver al inicio</div>
          <button
            className="back-to-top"
            onClick={scrollTopTop}
            aria-label="Volver al inicio"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 15 12 9 18 15" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default BackToTop;
