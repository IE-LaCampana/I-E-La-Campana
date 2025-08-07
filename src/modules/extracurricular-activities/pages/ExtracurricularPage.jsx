import React from 'react'
import IntroductionSection from '../../core/design-system/IntroductionSection/IntroductionSection';
import ExtracurricularHero from '../components/ExtracurricularHero';
import { extracurricularHeroData } from '../data/extracurricularHeroData';
import { extracurricularData } from '../data/extracurricularData';
import ActivityCard from '../components/ActivityCard';

const ExtracurricularPage = () => {
  return (
    <div className="extracurricular-page">
      <ExtracurricularHero {...extracurricularHeroData} />
      <IntroductionSection {...extracurricularData} />
      <ActivityCard />
    </div>
  );
}

export default ExtracurricularPage