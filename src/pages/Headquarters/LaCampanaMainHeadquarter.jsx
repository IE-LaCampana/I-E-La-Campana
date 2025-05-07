import React from 'react'
import HeadquarterImageCarousel from "../../components/common/HeadquarterImageCarousel/HeadquarterImageCarousel"
import { laCampanaImages } from "../../data/LaCampanaCarouselData"; 

const LaCampanaMainHeadquarter = () => {
  return (
    <div>
      <main>
        <HeadquarterImageCarousel
          slides={laCampanaImages}
        />
      </main>
    </div>
  );
}

export default LaCampanaMainHeadquarter