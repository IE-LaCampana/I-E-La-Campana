import React from "react";
import "../styles/DailyRoutineSection.css";
import { routineSteps } from "../data/routineStepsData";

const DailyRoutineSection = () => {
  return (
    <div className="daily-routine-section">
      <div className="daily-routine-section__container">
        <div className="daily-routine-section__header">
          <h1 className="daily-routine-section__title">
            ¿Cómo es el día a día en el comedor?
          </h1>
        </div>
        <div className="daily-routine-section__grid">
          {routineSteps.map((step) => (
            <article key={step.id} className="daily-routine-section__card">
              <div className="daily-routine-section__card">
                <div
                  className={`daily-routine-section__number ${step.colorClass}`}
                >
                  {step.number}
                </div>
                <div className="daily-routine-section__content">
                  <h1 className="daily-routine-section-content__title">{step.title}</h1>
                  <p className="daily-routine-section__description">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DailyRoutineSection;
