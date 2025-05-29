import React from "react";
import HeadquarterImageCarousel from "../../../../modules/Headquarters/components/HeadquarterImageCarousel/HeadquarterImageCarousel";
import { laCampanaImages } from "../../data/LaCampanaCarouselData";
import AcademicPrograms from "../../../../modules/academic-programs/components/AcademicPrograms/AcademicPrograms";
import { laCampanaHistory } from "../../../../modules/history/data/laCampanaHistory";
import History from "../../../../modules/history/components/History/History";
import StaffDirectory from "../../../../modules/staff-directory/pages/StaffDirectory/StaffDirectory";
import EducationalServices from "../../../../modules/educational-services/pages/EducationalServices/EducationalServices";

const LaCampana = () => {
  return (
    <div>
      <main>
        <HeadquarterImageCarousel slides={laCampanaImages} />
        <AcademicPrograms />
        <History data={laCampanaHistory} />
        <StaffDirectory />
        <EducationalServices />
      </main>
    </div>
  );
};

export default LaCampana;
