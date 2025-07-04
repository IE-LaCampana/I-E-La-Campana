import React from "react";
import { PhilosophyCard } from "../../components/PhilosophyCard/PhilosophyCard";
import { philosophyContent } from "../../data/philosophyData";
import "../../styles/philosophyCard.css";

const PhilosophyPage = () => {
  return (
    <section className="philosophy-page">
      <div className="philosophy-header">
        <h1 className="philosophy-main-title">FILOSOFÍA E IDENTIDAD</h1>
      </div>
      <PhilosophyCard {...philosophyContent} />
    </section>
  );
};

export default PhilosophyPage;
