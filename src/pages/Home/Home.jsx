import React from 'react'
import BannerCarousel from '../../components/ul/BannerCarousel/BannerCarousel';
import NewsEventsCarousel from "../../components/modules/communication/NewsEvents/NewsEventsCarousel/NewsEventsCarousel";
import OurStrengths from '../../components/modules/educationalStrengths/OurStrengths/OurStrengths';
import MissionVisionValues from '../../components/modules/institutionalIdentity/MissionVisionValues/MissionVisionValues';
import AcademicStatistics from '../../components/modules/academic/AcademicStatistics/AcademicStatistics';
import TestimonialsCarousel from "../../components/modules/community/Testimonials/TestimonialsCarousel/TestimonialsCarousel";
import HeadquartersMap from "../../components/modules/institutionalIdentity/HeadquartersMap/HeadquartersMap";
import Footer from  "../../components/layouts/Footer/Footer"




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
        <HeadquartersMap />
      </main>
    </div>
  );
}

export default Home