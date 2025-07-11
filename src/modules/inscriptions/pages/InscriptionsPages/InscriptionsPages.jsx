import React from "react";
import HeroBackground from "../../../../modules/core/design-system/HeroBackground/HeroBackground";
import { heroBackgroundInscriptionData } from "../../data/heroBackgroundInscriptionData";
import InscriptionCard from "../../components/InscriptionsCard/InscriptionCard";
import { inscriptionsData } from "../../data/inscriptionsData";
import InscriptionProcess from "../../components/InscriptionsCard/InscriptionProcess";

const InscriptionsPages = () => {
  return (
    <div className="inscriptions-pages">
      <HeroBackground data={heroBackgroundInscriptionData} />
      <InscriptionProcess />
      <InscriptionCard inscriptions={inscriptionsData} />
    </div>
  );
};

export default InscriptionsPages;
