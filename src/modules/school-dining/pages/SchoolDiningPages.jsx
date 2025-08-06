import React from 'react'
import HeroSection from "../../../modules/core/design-system/HeroSection/HeroSection";
import { heroSectionData } from "../data/heroSectionData";
import IntroductionSection from '../../core/design-system/IntroductionSection/IntroductionSection';
import { introductionSection } from '../data/introductionSection';
import BenefitsSection from '../../core/design-system/BenefitsSection/BenefitsSection';
import DailyRoutineSection from '../components/DailyRoutineSection';
import { educationalInitiativeData } from '../data/EducationalInitiativeData';

const SchoolDiningPages = () => {
  return (
    <div>
      <HeroSection {...heroSectionData} />
      <IntroductionSection {...introductionSection} />
      <BenefitsSection />
      <DailyRoutineSection />
      <IntroductionSection {...educationalInitiativeData} />
    </div>
  );
}

export default SchoolDiningPages