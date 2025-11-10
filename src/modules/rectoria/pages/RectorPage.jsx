
import React from 'react'
import ExtracurricularHero from '../../extracurricular-activities/components/ExtracurricularHero';
import BackgroundImageFondo from "../../../assets/backgrounds/rectoria-img-2.jpeg";
import RectorCard from '../components/RectorCard';
import { rectorCardData } from '../data/rectorCardData';
import "../styles/rectorPage.css"

const RectorPage = () => {
  return (
    <div>
      <ExtracurricularHero
        title="Rectoría"
        backgroundImage={BackgroundImageFondo}
        className="rector-hero"
      />
      <RectorCard data={ rectorCardData } />
    </div>
  );
}

export default RectorPage