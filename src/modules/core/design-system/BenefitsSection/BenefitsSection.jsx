import React from "react";
import { ChefHat, Droplets, Utensils, Calendar } from "lucide-react";
import "./BenefitsSection.css";

const BenefitsSection = () => {
    const benefits = [
      {
        id: 1,
        icon: ChefHat,
        title: "Alimentación saludable",
        description:
          "Cocinamos cada día con alimentos que cuidan la una vida sana.",
      },
      {
        id: 2,
        icon: Droplets,
        title: "Dieta adaptativa",
        description:
          "Adaptamos nuestros menús a intolerancias y alergénicos de manera personalizada.",
      },
      {
        id: 3,
        icon: Utensils,
        title: "Dieta adaptativa",
        description:
          "Adaptamos nuestros menús a intolerancias y alergénicos de manera personalizada.",
      },
      {
        id: 4,
        icon: Calendar,
        title: "Menú de temporada",
        description:
          "Cocinamos con productos de temporada y lo programamos según el calendario escolar.",
      },
    ];
  return (
    <div className="benefits-section">
      <div className="benefits-section__container">
        <div className="benefits-section__header">
          <h1 className="benefits-section__title">
            Estas son las ventajas de contar con una cocina propia
          </h1>
        </div>
        <div className="benefits-section__grid">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <article key={benefit.id} className="benefits-section__card">
                <div className="benefits-section__icon-wrapper">
                  <IconComponent
                    className="benefits-section__icon"
                    size={32}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="benefits-section__content">
                  <h2 className="benefits-section__card-tilte">
                    {benefit.title}
                  </h2>
                  <p className="benefits-section__card-description">
                    {benefit.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection


