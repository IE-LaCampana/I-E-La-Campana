import React from "react";
import studentServicesData from "../../data/studentServices"; // Sin .jsx
import StudentServiceCard from "../../components/StudentServiceCard/StudentServiceCard";
import "../../styles/facilities.css";
const Facilities = () => {
  return (
    <div className="facilities-container">
      <div className="facilities-content">
        <h2 className="facilities-title">
          <strong className="title-highlight">SERVICIOS</strong> EDUCATIVA
        </h2>
      </div>
      <div className="facilities-grid">
        {studentServicesData.map((service) => (
          <StudentServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Facilities;
