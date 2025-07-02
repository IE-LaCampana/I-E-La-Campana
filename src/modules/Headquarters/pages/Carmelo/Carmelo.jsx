import Carousel from "../../../../modules/core/design-system/Carousel/Carousel";
import { carouselCarmeloData } from "../../data/carouselCarmeloData";
import AcademicPrograms from "../../../../modules/academic-programs/components/AcademicPrograms/AcademicPrograms";
import { academicProgramsCarmeloData } from "../../../../modules/academic-programs/data/academicProgramsCarmeloData";
import History from "../../../../modules/history/components/History/History";
import { historyCarmeloData } from "../../../../modules/history/data/historyCarmeloData";
import StaffDirectory from "../../../../modules/staff-directory/components/StaffDirectory/StaffDirectory";
import staffDirectoryManantialData from "../../../../modules/staff-directory/data/staffDirectoryManantialData";
import "../../styles/manantial.css";
import EducationalServices from "../../../../modules/educational-services/components/EducationalServices/EducationalServices";
import servicesData from "../../../../modules/educational-services/data/servicesData";
import LocationCard from "../../../../modules/location/components/LocationCard/LocationCard";
import locationData from "../../../../modules/location/data/locationData";

const Carmelo = () => {
  const laCampanaLocation = locationData.find((location) => location.id === 6);

  return (
    <div>
      <main>
        <Carousel
          slides={carouselCarmeloData}
          showGroupLabel={false}
          navigationStyle="headquarters"
        />
        <AcademicPrograms academicPrograms={academicProgramsCarmeloData} />
        <History data={historyCarmeloData} />
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

export default Carmelo;
