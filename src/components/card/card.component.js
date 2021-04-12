import React from "react";
import "./card.styles.css";

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        src={`http://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt="monster"
      ></img>
      <h3 className="monster-name">{monster.name}</h3>
      <p>{monster.email}</p>
    </div>
  );
};
