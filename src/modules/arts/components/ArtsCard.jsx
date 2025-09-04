import React, { useState, useEffect, useRef } from "react";
import "../styles/artsCard.css";
import Button from "../../core/design-system/Button/Button";
import { useNavigate } from "react-router-dom";

const ArtsCard = ({ data }) => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(0);
  const [showPagination, setShowPagination] = useState(false);
  const cardsRefs = useRef([]);
  const containerRef = useRef(null);

  const handleViewMore = () => {
    navigate(`/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerBottom = containerTop + containerRef.current.offsetHeight;
      const viewportCenter = scrollPosition + window.innerHeight / 2;
      const isInContainer =
        viewportCenter >= containerTop && viewportCenter <= containerBottom;
      setShowPagination(isInContainer);

      if (isInContainer) {
        cardsRefs.current.forEach((card, index) => {
          if (card) {
            const cardTop = card.offsetTop;
            const cardBottom = cardTop + card.offsetHeight;

            if (viewportCenter >= cardTop && viewportCenter < cardBottom) {
              setActiveCard(index);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  const PaginationIndicators = () => (
    <div
      className={`pagination-indicators ${
        showPagination ? "visible" : "hidden"
      }`}
    >
      {data.map((_, index) => (
        <div
          key={index}
          className={`pagination-diamond ${
            activeCard === index ? "active" : ""
          }`}
          onClick={() => {
            cardsRefs.current[index]?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="artsCard" ref={containerRef}>
      <PaginationIndicators />
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardsRefs.current[index] = el)}
          className={`artsCard__item ${index % 2 === 0 ? "right" : "left"}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="arts-card-container">
            <div className="arts-card-content">
              <div className="artsCard__backgroundOverlay"></div>

              <div className="artsCard__overlay">
                <span className="artsCard__tag">LAS ARTES</span>
                <h2 className="artsCard__title">{item.title}</h2>
                <p className="artsCard__description">{item.description}</p>
                <Button
                  label="DESCUBRA MÁS"
                  onClick={handleViewMore}
                  className="arts-button"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtsCard;
