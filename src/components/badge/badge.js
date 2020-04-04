import React from 'react';
import {
    Button,
    Classes,
  } from "@blueprintjs/core";
  import "./badge.css";

function GPBadge({ points }) {
  return (
    <div className="Badge">
        <Button className={`${Classes.MINIMAL} GreenPointBadge`} icon="tree" text={`${points} green points`} />
    </div>
  );
}

export default GPBadge;
