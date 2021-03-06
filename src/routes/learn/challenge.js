import React from 'react';
import './challenge.css';
import { Icon } from "@blueprintjs/core";
import {
  Link
} from "react-router-dom";
import Badge from "../../components/badge/badge";

function Challenge({ name, score, total, icon, link, theme }) {
  const isComplete = score === total;

  return (
    <Link to={link} className={isComplete ? `Challenge ${theme} complete` : `Challenge ${theme}`}>
        <div className="name">{name}</div>
        <Icon icon={icon} className="bottomMargin Challenge__icon" />
        <div className="clear" />
        {isComplete && <div className="total complete">COMPLETE</div>}
        {!isComplete && <Badge points={score} />}
    </Link>
  );
}

export default Challenge;
