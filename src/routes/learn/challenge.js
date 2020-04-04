import React from 'react';
import './challenge.css';
import { Icon } from "@blueprintjs/core";
import {
  Link
} from "react-router-dom";

function Challenge({ name, score, total, icon, link }) {
  return (
    <Link activeClassName="active" to={link}>
      <div className="Challenge">
        <div className="name">{name} <Icon icon={icon} /></div>

        <div className="score">{score}</div>
        <div className="total">{score} / {total} GP</div>
      </div>
    </Link>
  );
}

export default Challenge;
