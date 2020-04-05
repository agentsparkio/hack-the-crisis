import React from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import Leaderboard from "./leaderboard";
import Rewards from "./../me/Rewards";
import './explore.css';

function Explore({ setNotifyText, setNotifyTextHeader, selectedTab }) {
  const [selectedTabId, selectTabId] = React.useState(selectedTab);

  return (
    <div className="Explore container-wide">
      <Tabs onChange={(id) => { selectTabId(id)}} selectedTabId={selectedTabId}>
        <Tab id="Leaderboard" title="Leaderboard" panel={<Leaderboard setNotifyTextHeader={setNotifyTextHeader} setNotifyText={setNotifyText} />} />
        <Tab id="Rewards" title="Rewards" panel={<Rewards />} />
        <Tabs.Expander />
      </Tabs>

    </div>
  );
}

export default Explore;
