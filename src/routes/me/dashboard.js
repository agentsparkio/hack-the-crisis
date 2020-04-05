import React from 'react';
import { Icon } from "@blueprintjs/core";
import Rewards from "./Rewards";
import './dashboard.css';
import Challenge from "./../learn/challenge";

function Dashboard({ location }) {
  return (
    <div className="Dashboard container">
      <h1>Get active</h1>
      <h3>National Challenges</h3>
      <div className="flex">
        <Challenge
          name="Covid O War"
          score="500"
          total="1500"
          icon="heatmap"
          theme="COVID19"
        />
        <Challenge
          name="Red Cross Donate"
          score="120"
          total="1500"
          icon="plus"
          theme="RED"
        />
        <Challenge
          name="Salvos Donate"
          score="12"
          total="1500"
          icon="plus"
          theme="RED"
        />
      </div>
    <h3>Local Offers from {location} <Icon icon="geolocation" /></h3>
    <Rewards />
    </div>
  );
}

export default Dashboard;
