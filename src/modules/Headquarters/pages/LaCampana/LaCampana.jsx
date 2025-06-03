import React from "react";
import HeadquarterImageCarousel from "../../../../modules/Headquarters/components/HeadquarterImageCarousel/HeadquarterImageCarousel";
import { laCampanaImages } from "../../data/LaCampanaCarouselData";
import AcademicPrograms from "../../../../modules/academic-programs/components/AcademicPrograms/AcademicPrograms";
import { laCampanaHistory } from "../../../../modules/history/data/laCampanaHistory";
import History from "../../../../modules/history/components/History/History";
import StaffDirectory from "../../../../modules/staff-directory/pages/StaffDirectory/StaffDirectory";
import EducationalServices from "../../../../modules/educational-services/pages/EducationalServices/EducationalServices";
import EducationalProjects from "../../../../modules/educational-projects/components/EducationalProjects/EducationalProjects";
import LocationCard from "../../../../modules/location/components/LocationCard/LocationCard";
import locationData from "../../../../modules/location/data/locationData";
import "../../styles/laCampana.css";
const LaCampana = () => {

  const laCampanaLocation = locationData.find((location) => location.id === 1);

  return (
    <div>
      <main>
        <HeadquarterImageCarousel slides={laCampanaImages} />
        <AcademicPrograms />
        <History data={laCampanaHistory} />
        <StaffDirectory />
        <EducationalServices />
        <EducationalProjects />
        {laCampanaLocation && (
          <div className="location-card">
            <h1 className="headquarters-title">
              <strong>Ubicación </strong>Geográfica
            </h1>
            <LocationCard mapUrl={laCampanaLocation.mapUrl} />
          </div>
        )}
      </main>
    </div>
  );
};

export default LaCampana;
