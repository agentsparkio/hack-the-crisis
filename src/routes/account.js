import React from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import Achievement from "./achievement";
import Rewards from "./Rewards";
import Badge from "./../components/badge/badge";
import './Account.css';

function Account() {
  const [selectedTabId, selectTabId] = React.useState("Achievement");

  return (
    <div className="Me">
      <div className="profile" />
      <div className="info">
        Jane Smith<br />
        Testville NSW<br />
        Level 10 - Captain Planet<br />
        <Badge points="20" />
      </div>
      <Tabs onChange={(id) => { selectTabId(id)}} selectedTabId={selectedTabId}>
        <Tab id="Achievement" title="Achievement" panel={<Achievement />} />
        <Tab id="Rewards" title="Rewards" panel={<Rewards />} />
        <Tabs.Expander />
      </Tabs>

    </div>
  );
}

export default Account;
