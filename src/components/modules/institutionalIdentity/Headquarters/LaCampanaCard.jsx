import React from "react";
import { Link } from "react-router-dom";
import HeadquarterImageCarousel from "../../../common/HeadquarterImageCarousel/HeadquarterImageCarousel";
import { laCampanaImages } from "../../../../data/LaCampanaCarouselData";

const LaCampanaCard = () => {
  return (
    <div className="headquarter-card">
      <HeadquarterImageCarousel
        slides={laCampanaImages}
      />
    </div>
  );
};

export default LaCampanaCard;
