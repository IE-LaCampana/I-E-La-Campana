import React from "react";
import BannerCarousel from "../../../modules/core/design-system/BannerCarousel/BannerCarousel";
import NewsEventsCarousel from "../../../modules/news-events/components/NewsEventsCarousel/NewsEventsCarousel";
import OurStrengths from "../../../modules/ourStrengths/components/OurStrengths/OurStrengths";
import MissionVisionValues from "../../../modules/mission-vision-values/components/MissionVisionValues/MissionVisionValues";
import AcademicStatistics from "../../../modules/academic-statistics/components/AcademicStatistics/AcademicStatistics";
import TestimonialsCarousel from "../../../modules/testimonials/components/TestimonialsCarousel/TestimonialsCarousel";
import LocationCarousel from "../../../modules/location/components/LocationCarousel/LocationCarousel";

const Home = () => {
  return (
    <div className="Home-page">
      <main>
        <BannerCarousel />
        <NewsEventsCarousel />
        <OurStrengths />
        <MissionVisionValues />
        <AcademicStatistics />
        <TestimonialsCarousel />
        <LocationCarousel />
      </main>
    </div>
  );
};

export default Home;
