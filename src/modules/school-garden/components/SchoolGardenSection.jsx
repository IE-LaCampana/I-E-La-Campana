import React from "react";
import SchoolGardenCard from "./SchoolGardenCard";

const SchoolGardenSection = ({ cards }) => {
  return (
    <section>
      {cards.map((card) => (
        <SchoolGardenCard
          key={card.id}
          title={card.title}
          text={card.description}
          image={card.image}
          imageLeft={card.imageLeft}
        />
      ))}
    </section>
  );
};

export default SchoolGardenSection;
