
import React from 'react'
import CompostHero from '../components/CompostHero';
import { compostHeroData } from '../data/compostHeroData';
import CompostHowToCard from '../components/CompostHowToCard';
import { compostHowToData } from '../data/compostHowToData';

const CompostPage = () => {
  return (
    <div>
      <CompostHero data={compostHeroData} />
      <CompostHowToCard data={compostHowToData} />
    </div>
  );
}

export default CompostPage