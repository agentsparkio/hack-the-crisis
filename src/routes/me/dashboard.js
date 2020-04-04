import React from 'react';
// import { Tab, Tabs } from "@blueprintjs/core";
// import Rewards from "./Rewards";
import './dashboard.css';

function Dashboard() {
  // const [selectedTabId, selectTabId] = React.useState("Achievement");

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      {/* <Tabs onChange={(id) => { selectTabId(id)}} selectedTabId={selectedTabId}>
        <Tab id="Rewards" title="Rewards" panel={<Rewards />} />
        <Tabs.Expander />
      </Tabs> */}

    </div>
  );
}

export default Dashboard;
