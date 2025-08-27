import React from 'react'
import YatulHero from '../components/YatulHero';
import { yatulHeroData } from '../data/yatulHeroData';
import YatulCard from '../components/YatulCard';
import { yatulCardData } from '../data/yatulCardData';


const YatulPage = () => {
  return (
    <div>
      <YatulHero data={yatulHeroData} />
      <YatulCard data={yatulCardData} />
    </div>
  );
}

export default YatulPage