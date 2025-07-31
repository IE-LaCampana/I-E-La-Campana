import React from "react";
import ChemistryLabCard from "../components/ChemistryLabCard";
import { chemistryLabInfo } from "../data/chemistryLabData";


const ChemistryLabPage = () => {   
  return (     
    <main>       
      <ChemistryLabCard         
        title={chemistryLabInfo.title}         
        description={chemistryLabInfo.description}         
        image={chemistryLabInfo.image}         
        sections={chemistryLabInfo.sections}  // CAMBIADO: sections en lugar de equipment
      />     
    </main>   
  ); 
};  

export default ChemistryLabPage;
