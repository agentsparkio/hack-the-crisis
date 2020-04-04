import React from 'react';
import './challenge.css';
import { Icon } from "@blueprintjs/core";
import {
  Link
} from "react-router-dom";

function Challenge({ name, score, total, icon, link }) {
  const isComplete = score === total;

  return (
    <Link to={link} className="Challenge__container">
      <div className={isComplete ? "Challenge" : "Challenge complete"}>
        <div className="name">{name} <Icon icon={icon} /></div>
        <div className="score">{score} GREEN POINTS</div>
        {isComplete && <div className="total">COMPLETE</div>}
        {!isComplete && <div className="total">{score} / {total} GP</div>}
      </div>
    </Link>
  );
}

export default Challenge;
