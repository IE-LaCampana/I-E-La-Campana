import { ServiceCard } from "../../components";
import "../../styles/educationalServices.css";
const EducationalServices = ({ servicesData }) => {
  return (
    <div className="educational-services-container">
      <div className="educational-services-content">
        <h2 className="educational-services-title">
          <strong>SERVICIOS</strong> EDUCATIVOS
        </h2>
      </div>
      <div className="educational-services-grid">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default EducationalServices;
