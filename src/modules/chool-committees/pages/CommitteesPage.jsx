import React from 'react'
import ExtracurricularHero from '../../extracurricular-activities/components/ExtracurricularHero'
import BackgroundImageFondo from "../../../assets/backgrounds/comite-academico.jpeg";
import CompostHowToCard from '../../school-compost/components/CompostHowToCard';
import { committeesData } from '../data/committeesData';

import "../styles/committeesPage.css"

const CommitteesPage = () => {
  return (
    <div>
      <ExtracurricularHero
        title="Comité Académico"
        backgroundImage={BackgroundImageFondo}
        className="comittess-hero"
      />
      <CompostHowToCard
        data={committeesData}
        showTitle={false}
        className="committees-card-wrapper"
      />
    </div>
  );
}

export default CommitteesPage
