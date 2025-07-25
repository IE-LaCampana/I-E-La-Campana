import React from "react";
import "./Breadcrumb.css";


const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-content">
        <div className="breadcrumb-text">
          {items.map((item, index) => (
            <span key={index}>
              {item}
              {index < items.length - 1 && (
                <span className="breadcrumb-icon">
                  <i className="bi bi-chevron-double-right"></i>
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;