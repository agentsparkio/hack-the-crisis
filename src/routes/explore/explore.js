import React from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import Leaderboard from "./leaderboard";
import Community from "./community";
import './explore.css';

function Explore() {
  const [selectedTabId, selectTabId] = React.useState("Leaderboard");

  return (
    <div className="Explore">
      <Tabs onChange={(id) => { selectTabId(id)}} selectedTabId={selectedTabId}>
        <Tab id="Leaderboard" title="Leaderboard" panel={<Leaderboard />} />
        <Tab id="Community" title="Community" panel={<Community />} />
        <Tabs.Expander />
      </Tabs>

    </div>
  );
}

export default Explore;
