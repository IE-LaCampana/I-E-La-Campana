import React from 'react'
import HeadquarterImageCarousel from "../../components/common/HeadquarterImageCarousel/HeadquarterImageCarousel"
import { laCampanaImages } from "../../data/LaCampanaCarouselData"; 
import AcademicPrograms from "../../components/modules/academic/AcademicPrograms/AcademicPrograms"


const LaCampanaMainHeadquarter = () => {
  return (
    <div>
      <main>
        <HeadquarterImageCarousel slides={laCampanaImages} />
        <AcademicPrograms />
      </main>
    </div>
  );
}

export default LaCampanaMainHeadquarter