import React from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import { Card, Button } from "@blueprintjs/core";
import Badge from "../../components/badge/badge";
import Rewards from "./Rewards";
import MyData from "./../profile/myData";
import './dashboard.css';

function Dashboard() {
  const [selectedTabId, selectTabId] = React.useState("MyData");
  const [newThingsShow, setNewThingsShow] = React.useState(true);

  return (
    <div className="Dashboard">
      {newThingsShow && <Card interactive={false}
            >
                    <h2 className="Learn__dashboardHeader">Want some competition?</h2>
                    <p>Start the <strong>Greta Thunberg Challenge</strong> and earn 200 points.</p>
                    <p><Badge points="Greta Thunberg Challenge" /></p>
                    <p><Button intent="success">See more challenges</Button> 
                    <Button intent="info" onClick={() => setNewThingsShow(false)}>No thank you</Button>
                    </p>
                    
            </Card>}
      <h1>Dashboard</h1>
      <Tabs onChange={(id) => { selectTabId(id)}} selectedTabId={selectedTabId}>
        <Tab id="MyData" title="MyData" panel={<MyData />} />
        <Tab id="Rewards" title="Rewards" panel={<Rewards />} />
        <Tabs.Expander />
      </Tabs>

    </div>
  );
}

export default Dashboard;
