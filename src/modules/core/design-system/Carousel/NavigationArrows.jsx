import React from "react";

const NavigationArrows = ({ onPrevClick, onNextClick }) => {
  return (
    <>
      <div
        className="headquarters-arrow left-arrow"
        onClick={onPrevClick}
      ></div>

      <div
        className="headquarters-arrow right-arrow"
        onClick={onNextClick}
      ></div>
    </>
  );
};

export default NavigationArrows;
