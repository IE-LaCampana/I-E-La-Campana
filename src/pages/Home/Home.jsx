import React from 'react'
import BannerCarousel from '../../components/ul/BannerCarousel/BannerCarousel';
import NewsEvents from '../../components/modules/communication/NewsEvents/NewsEvents';
import OurStrengths from '../../components/modules/educationalStrengths/OurStrengths/OurStrengths';
import MissionVisionValues from '../../components/modules/institutionalIdentity/MissionVisionValues/MissionVisionValues';
import AcademicStatistics from '../../components/modules/academic/AcademicStatistics/AcademicStatistics';
import Testimonials from "../../components/modules/community/testimonials/testimonials";



const Home = () => {
  return (
    <div className="Home-page">
      <main>
        <BannerCarousel />
        <NewsEvents />
        <OurStrengths />
        <MissionVisionValues />
        <AcademicStatistics />
        <Testimonials />
      </main>
    </div>
  );
}

export default Home