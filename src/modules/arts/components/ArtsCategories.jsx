import React, { useState } from "react";
import "../styles/artsCategories.css";

const ArtsCategories = ({ data, intro }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="arts-categories">
      <div className="arts-categories-container">
        <div className="arts-categories-menu">
          {data.map((item, index) => (
            <div
              key={index}
              className={`arts-categories-menu-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleSelect(index)}
            >
              <span className="arts-categories-menu-text">{item.title}</span>
              <span className="arts-categories-icon-container">
                <span className="arts-categories-icon">
                  <i className="bi bi-plus"></i>
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="arts-categories-content">
          <div className="arts-categories-detail">
            {activeIndex === null ? (
              <>
                <h2 className="arts-categories-detail-title">Las Artes</h2>
                <p className="arts-categories-detail-description">{intro}</p>
              </>
            ) : (
              <>
                <h2 className="arts-categories-detail-title">
                  {data[activeIndex].title}
                </h2>
                <p className="arts-categories-detail-description">
                  {data[activeIndex].description}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtsCategories;





