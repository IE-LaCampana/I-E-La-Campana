import React from 'react'
import Calendario from "../../../assets/backgrounds/calendario-alimentacion.jpeg";
import "../styles/calendarSection.css";
    
const CalendarSection = () => {
  return (
    <div className="calendar-section">
      <div className="calendar-section-container">
        <h1 className="calendar-section-title">Calendario de Alimentación</h1>
        <img src={Calendario} alt="Calendario PAE" className="calendar-image" />
      </div>
    </div>
  );
}

export default CalendarSection;
