import React from 'react'
import ArtsHero from '../components/ArtsHero';
import { artsHeroData } from '../data/artsHeroData';
import ArtsCategories from "../components/ArtsCategories";
import ArtsCard from '../components/ArtsCard';
import { artsCardData } from '../data/artsCardData';
  
import {
  artsCategoriesData,
  artsCategoriesIntro,
} from "../data/artsCategoriesData";

const ArtsPage = () => {
  return (
    <div>
      <ArtsHero {...artsHeroData} />
      <ArtsCategories data={artsCategoriesData} intro={artsCategoriesIntro} />
      <ArtsCard data={artsCardData} />
    </div>
  );
}

export default ArtsPage;
