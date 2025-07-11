import React from "react";
import "./HeroBackground.css";

const HeroBackground = ({ data }) => {
  const { titleStrong, title, image } = data;
  return (
    <div
      className="Hero-background-container"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-background-content">
        <div className="hero-background-overlay">
          <h1 className="hero-background-title">
            <strong>{titleStrong}</strong> {title}
          </h1>
        </div>
      </div>
      <div className="hero-background-curve">
        <svg
          viewBox="0 0 1200 160"
          className="hero-background-curve-svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 Q300,0 600,60 T1200,60 L1200,160 L0,160 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroBackground;
