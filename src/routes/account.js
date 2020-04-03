import React from 'react';
import {
  Button,
  Classes,
} from "@blueprintjs/core";
import { Tab, Tabs } from "@blueprintjs/core";
import Achievement from "./achievement";
import Rewards from "./Rewards";
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
        <Button className={`${Classes.MINIMAL} GreenPointBadge`} icon="tree" text="165 GP" />
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
