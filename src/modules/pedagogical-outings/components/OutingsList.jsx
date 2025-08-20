import React from "react";
import OutingCard from "./OutingCard";
import "../styles/outingCard.css";

const OutingsList = ({ data }) => {
  return (
    <div
      className="outings-list" >
      {data.map((outing) => (
        <OutingCard key={outing.id} {...outing} />
      ))}
    </div>
  );
};

export default OutingsList;
