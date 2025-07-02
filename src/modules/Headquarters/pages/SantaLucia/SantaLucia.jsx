import Carousel from "../../../../modules/core/design-system/Carousel/Carousel";
import { carouselSantaLuciaData } from "../../data/carouselSantaLuciaData";
import AcademicPrograms from "../../../../modules/academic-programs/components/AcademicPrograms/AcademicPrograms";
import { academicProgramsSantaLuciaData } from "../../../../modules/academic-programs/data/academicProgramsSantaLuciaData";
import History from "../../../../modules/history/components/History/History";
import { historySantaLuciaData } from "../../../../modules/history/data/historySantaLuciaData";
import StaffDirectory from "../../../../modules/staff-directory/components/StaffDirectory/StaffDirectory";
import staffDirectoryManantialData from "../../../../modules/staff-directory/data/staffDirectoryManantialData";
import "../../styles/manantial.css";
import EducationalServices from "../../../../modules/educational-services/components/EducationalServices/EducationalServices";
import servicesData from "../../../../modules/educational-services/data/servicesData";
import LocationCard from "../../../../modules/location/components/LocationCard/LocationCard";
import locationData from "../../../../modules/location/data/locationData";

const SantaLucia = () => {
  const laCampanaLocation = locationData.find((location) => location.id === 6);

  return (
    <div>
      <main>
        <Carousel
          slides={carouselSantaLuciaData}
          showGroupLabel={false}
          navigationStyle="headquarters"
        />
        <AcademicPrograms academicPrograms={academicProgramsSantaLuciaData} />
        <History data={historySantaLuciaData} />
        <StaffDirectory customStaffData={staffDirectoryManantialData} />
        <EducationalServices servicesData={servicesData} />
        {laCampanaLocation && (
          <div className="location-card">
            <h1 className="headquarters-title">
              <strog>Ubicación </strog>Geográfica
            </h1>
            <LocationCard mapUrl={laCampanaLocation.mapUrl} />
          </div>
        )}
      </main>
    </div>
  );
};

export default SantaLucia;
