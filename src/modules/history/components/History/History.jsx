import React from "react";
import "../../styles/history.css";

const History = ({ data }) => {
  return (
    <div className="history-container">
      {data.map((item, index) =>
        index === 0 ? (
          <div key={item.id} className="history-banner">
            <div className="banner-image-container">
              <img src={item.image} alt={item.title} className="banner-image" />
              <div className="banner-overlay">
                <div className="banner-content">
                  <h2 className="banner-title">{item.title}</h2>
                  <h1 className="main-title">Historia</h1>
                  <p className="banner-description">{item.subtitle}</p>
                </div>
              </div>
            </div>
            <p className="banner-descriptions">{item.description}</p>
          </div>
        ) : (
          <div
            key={item.id}
            className={`history-content ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            <div className="history-image-container">
              <h3 className="history-item-title">{item.title}</h3>
              <img
                src={item.image}
                alt={item.title}
                className="history-image"
              />
            </div>
            <div className="history-text-container">
              <p className="history-description">{item.description}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default History;
