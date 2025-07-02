import Carousel from "../../../../modules/core/design-system/Carousel/Carousel";
import { carouselManantialData } from "../../data/carouselManantialData";
import AcademicPrograms from "../../../../modules/academic-programs/components/AcademicPrograms/AcademicPrograms";
import { academicProgramsManantialData } from "../../../../modules/academic-programs/data/academicProgramsManantialData";
import History from "../../../../modules/history/components/History/History"
import { manantialData } from "../../../../modules/history/data/manantialData"
import StaffDirectory from "../../../../modules/staff-directory/components/StaffDirectory/StaffDirectory";
import  staffDirectoryManantialData  from "../../../../modules/staff-directory/data/staffDirectoryManantialData"
import "../../styles/manantial.css";
import EducationalServices from "../../../../modules/educational-services/components/EducationalServices/EducationalServices"
import servicesData from "../../../../modules/educational-services/data/servicesData";
import LocationCard from "../../../../modules/location/components/LocationCard/LocationCard";
import locationData from "../../../../modules/location/data/locationData";

const Manantial = () => {
    const laCampanaLocation = locationData.find((location) => location.id === 6);

  return (
    <div>
      <main>
        <Carousel
          slides={carouselManantialData}
          showGroupLabel={false}
          navigationStyle="headquarters"
        />
        <AcademicPrograms academicPrograms={academicProgramsManantialData} />
        <History data={manantialData} />
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
}

export default Manantial;
