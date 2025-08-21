import React from "react";
import GardenHero from "../components/GardenHero";
import { gardenHeroData } from "../data/gardenHeroData";
import SchoolGardenSection from "../components/SchoolGardenSection";
import { schoolGardenCardsData } from "../data/schoolGardenCardsData";

const GardenPage = () => {
  return (
    <div>
      <GardenHero {...gardenHeroData} />
      <SchoolGardenSection cards={schoolGardenCardsData} />
    </div>
  );
};

export default GardenPage;
