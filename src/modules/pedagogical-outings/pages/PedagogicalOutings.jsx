import React from "react";
import ExtracurricularHero from "../../extracurricular-activities/components/ExtracurricularHero";
import { outingsHeroData } from "../data/outingsHeroData";
import IntroductionSection from "../../core/design-system/IntroductionSection/IntroductionSection";
import { outingsIntroductionData } from "../data/outingsIntroductionData";
import OutingsList from "../components/OutingsList";
import { outingsData } from "../data/outingsData";
const PedagogicalOutings = () => {
  return (
    <div>
      <ExtracurricularHero {...outingsHeroData} />
      <IntroductionSection {...outingsIntroductionData} />
      <OutingsList data={outingsData} />
    </div>
  );
};

export default PedagogicalOutings;
