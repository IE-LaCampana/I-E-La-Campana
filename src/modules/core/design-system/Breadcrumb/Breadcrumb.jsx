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
                <i className="bi bi-chevron-right breadcrumb-icon"></i>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
