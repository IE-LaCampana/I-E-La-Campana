import React, { useState, useEffect, useRef } from "react";
import "../../styles/academicStatistics.css";

const AcademicStatistics = () => {
  const statistics = [
    {
      id: 1,
      title: "Colegios",
      startValue: 0,
      endValue: 7,
    },
    {
      id: 2,
      title: "Cantidad de estudiantes",
      startValue: 0,
      endValue: 443,
    },
    {
      id: 3,
      title: "Años de Experiencia",
      startValue: 0,
      endValue: 76,
    },
    {
      id: 4,
      title: "Docentes",
      startValue: 0,
      endValue: 35,
    },
  ];

  const [counters, setCounters] = useState(
    statistics.map((stat) => stat.startValue)
  );
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      if (!containerRef.current || hasAnimated) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        animateCounters();
        setHasAnimated(true);
      }
    };

    const animateCounters = () => {
      const duration = 3000;
      const frameRate = 30;
      const totalFrames = duration / (1000 / frameRate);

      let frame = 0;

      const interval = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;

        if (frame <= totalFrames) {
          const newCounters = statistics.map((stat) => {
            return Math.floor(
              progress * (stat.endValue - stat.startValue) + stat.startValue
            );
          });
          setCounters(newCounters);
        } else {
          setCounters(statistics.map((stat) => stat.endValue));
          clearInterval(interval);
        }
      }, 1000 / frameRate);
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => window.removeEventListener("scroll", checkVisibility);
  }, [hasAnimated]);

  return (
    <div className="as-container" ref={containerRef}>
      <h2 className="as-title">
        <strong>ESTADÍSTICAS</strong> ACADEMÍCAS
      </h2>
      <div className="as-image-container">
        {statistics.map((statistic, index) => (
          <div key={index} className="as-stat-card">
            <div className="as-counter-wrapper">
              <span className="as-counter-number">{counters[index]}</span>
            </div>
            <h3>{statistic.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicStatistics;
