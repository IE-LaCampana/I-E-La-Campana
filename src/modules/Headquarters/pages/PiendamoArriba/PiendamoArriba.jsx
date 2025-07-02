import Carousel from "../../../../modules/core/design-system/Carousel/Carousel";
import { carouselPiendamoData } from "../../data/carouselPiendamoData";
import AcademicPrograms from "../../../../modules/academic-programs/components/AcademicPrograms/AcademicPrograms";
import { academicProgramsPiendamoData } from "../../../../modules/academic-programs/data/academicProgramsPiendamoData";
import History from "../../../../modules/history/components/History/History";
import { historyPiendamoData } from "../../../../modules/history/data/historyPiendamoData";
import StaffDirectory from "../../../../modules/staff-directory/components/StaffDirectory/StaffDirectory";
import staffDirectoryManantialData from "../../../../modules/staff-directory/data/staffDirectoryManantialData";
import "../../styles/manantial.css";
import EducationalServices from "../../../../modules/educational-services/components/EducationalServices/EducationalServices";
import servicesData from "../../../../modules/educational-services/data/servicesData";
import LocationCard from "../../../../modules/location/components/LocationCard/LocationCard";
import locationData from "../../../../modules/location/data/locationData";

const PiendamoArriba = () => {
  const laCampanaLocation = locationData.find((location) => location.id === 6);

  return (
    <div>
      <main>
        <Carousel
          slides={carouselPiendamoData}
          showGroupLabel={false}
          navigationStyle="headquarters"
        />
        <AcademicPrograms academicPrograms={academicProgramsPiendamoData} />
        <History data={historyPiendamoData} />
        <StaffDirectory customStaffData={staffDirectoryManantialData} />
        <EducationalServices servicesData={servicesData} />
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

export default PiendamoArriba;
