import React from 'react'
import BannerCarousel from '../../components/ul/BannerCarousel/BannerCarousel'
import NewsEvents from '../../components/modules/communication/NewsEvents/NewsEvents';


const Home = () => {
  return (
    <div className="Home-page">
      <main>
        <BannerCarousel />
        <NewsEvents/>
      </main>
    </div>
  );
}

export default Home