import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import "./Rewards.css";

function Rewards() {
  return (
    <div className="Rewards">
      <Card interactive={true} elevation={Elevation.TWO}>
        <h5><span className="left">200 GP</span><a href="#">Cruelty Free Shop</a><span className="right">200 GREEN POINTS</span></h5>
        <p>Get a discount of 25% for XYZ</p>
        <Button>REDEEM</Button>
      </Card>
    </div>
  );
}

export default Rewards;
