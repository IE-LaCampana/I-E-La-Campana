import React, { useEffect, useState } from "react";
import LocationCard from "../LocationCard/LocationCard";
import "../../styles/locationCarousel.css";
import locationData from "../../data/locationData";

const LocationCarousel = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 480) setItemsPerRow(1);
    else if (windowWidth <= 992) setItemsPerRow(2);
    else setItemsPerRow(3);

    const maxTab = Math.ceil(locationData.length / itemsPerRow) - 1;
    if (activeTab > maxTab) setActiveTab(maxTab);
  }, [windowWidth, itemsPerRow, activeTab]);

  const totalPages = Math.ceil(locationData.length / itemsPerRow);

  return (
    <div className="headquarters-container">
      <h1 className="headquarters-title">
        <strong>UBICACIÓN DE NUESTRAS</strong> SEDES INSTITUCIONALES
      </h1>
      <div className="headquarters-grid">
        {locationData
          .slice(activeTab * itemsPerRow, (activeTab + 1) * itemsPerRow)
          .map((item, index) => (
            <LocationCard
              key={index}
              name={item.name}
              description={item.description}
              mapUrl={item.mapUrl}
            />
          ))}
      </div>
      <div className="headquarters-tabs">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`tabs-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {index + 1}
          </button>
        ))}
        <div className="headquarters-icon-container">
          <button
            onClick={() => setActiveTab((prev) => Math.max(prev - 1, 0))}
            disabled={activeTab === 0}
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            onClick={() =>
              setActiveTab((prev) => Math.min(prev + 1, totalPages - 1))
            }
            disabled={activeTab === totalPages - 1}
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCarousel;
