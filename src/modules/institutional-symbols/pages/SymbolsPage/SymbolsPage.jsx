import React from "react";
import SymbolCard from "../../components/SymbolCard/SymbolCard";
import { symbolsData, himnosData, uniformesData} from "../../data/symbolsData";
import "../../styles/symbolCard.css";
import HimnoCard from "../../components/HimnoCard/HimnoCard";
import UniformesCard from "../../components/UniformesCard/UniformesCard";
 

const SymbolsPage = () => {
  return (
    <div className="symbols-page">
      <div className="symbols-page-hero">
        <div className="symbols-page-content">
          <div className="symbols-page-overlay">
            <h1 className="symbols-page__title">
              <strong>SÍMBOLOS</strong> INSTITUCIONALES
            </h1>
          </div>
        </div>
        <div className="curved-bottom">
          <svg viewBox="0 0 1200 120" className="curve-svg">
            <path
              d="M0,40 Q200,0 400,40 T800,40 Q1000,0 1200,40 L1200,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
        <div className="decorative-line">
          <div className="line-segment red"></div>
          <div className="line-segment blue"></div>
          <div className="line-segment yellow"></div>
        </div>
      </div>

      <div className="symbols-page__cards">
        {symbolsData.map((symbol, index) => (
          <SymbolCard
            key={index}
            title={symbol.title}
            description={symbol.description}
            image={symbol.image}
            alt={symbol.alt}
          />
        ))}

        {himnosData.map((item) => (
          <HimnoCard
            key={item.id}
            title={item.title}
            verses={item.verses}
            audioSrc={item.audioSrc}
          />
        ))}

        <h2 className="uniformes-card__title">
          <strong>UNIFORMES DE</strong> LA INSTITUCIÓN
        </h2>
        <UniformesCard
          description={uniformesData.description}
          uniformes={uniformesData.uniformes}
        />
      </div>
    </div>
  );
};

export default SymbolsPage;