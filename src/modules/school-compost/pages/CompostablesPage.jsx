
import React from "react";
import CompostablesHero from "../components/CompostablesHero";
import { compostablesHeroData } from "../data/compostablesHeroData";
import CompostablesCard from "../components/CompostablesCard";
import { compostablesCardData } from "../data/compostablesCardData";
const CompostablesPage = () => {
  return (
    <div>
      <CompostablesHero data={compostablesHeroData} />
      <CompostablesCard data={compostablesCardData} />
    </div>
  );
};

export default CompostablesPage;

