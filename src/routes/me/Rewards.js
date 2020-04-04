import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import Badge from "../../components/badge/badge";
import "./Rewards.css";

function Rewards() {
  return (
    <div className="Rewards">
      <Card interactive={true} elevation={Elevation.TWO}>
        <h5><Badge points="20" />
          <a href="http://www.test.com">Cruelty Free Shop</a>
          <span className="right">20% off</span>
        </h5>
        <p>Get a discount of 25% for XYZ</p>
        <Button>REDEEM</Button>
      </Card>
    </div>
  );
}

export default Rewards;
