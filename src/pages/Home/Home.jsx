import React from 'react'
import BannerCarousel from '../../components/ul/BannerCarousel/BannerCarousel'
import NewsEvents from '../../components/modules/communication/NewsEvents/NewsEvents';
import OurStrengths from '../../components/modules/educationalStrengths/OurStrengths/OurStrengths'


const Home = () => {
  return (
    <div className="Home-page">
      <main>
        <BannerCarousel />
        <NewsEvents />
        <OurStrengths />
      </main>
    </div>
  );
}

export default Home