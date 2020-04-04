import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import Badge from "../../components/badge/badge";
import "./Rewards.css";

function Rewards() {
  return (
    <div className="Rewards">
      <Card interactive={true} elevation={Elevation.TWO}>
      <div className="left"><Badge points="20" /></div>
        <h5>
          <a href="http://www.test.com">Cruelty Free Shop 10% off</a>
          <Button className="right" intent="success">REDEEM REWARD</Button>
        </h5>
      </Card>
      <Card interactive={true} elevation={Elevation.TWO}>
      <div className="left"><Badge points="20" /></div>
        <h5>
          <a href="http://www.test.com">Nut Grocer Online Shop 10% off</a>
          <Button className="right" intent="success">REDEEM REWARD</Button>
        </h5>
      </Card>
      <Card interactive={true} elevation={Elevation.TWO}>
      <div className="left"><Badge points="20" /></div>
        <h5>
          <a href="http://www.test.com">50% off reuseable containers</a>
          <Button className="right" intent="success">REDEEM REWARD</Button>
        </h5>
      </Card>
    </div>
  );
}

export default Rewards;
