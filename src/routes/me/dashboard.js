import React from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import { Card, Button } from "@blueprintjs/core";
import Rewards from "./Rewards";
import MyData from "./../profile/myData";
import './dashboard.css';

function Dashboard({ location }) {
  const [selectedTabId, selectTabId] = React.useState("MyData");
  const [newThingsShow, setNewThingsShow] = React.useState(true);

  return (
    <div className="Dashboard container">
      {newThingsShow && <Card interactive={false} className="Dashboard__alert"
            >
                    <h2 className="Learn__dashboardHeader">Want some competition?</h2>
                    <p>Start the <strong>Greta Thunberg Challenge</strong> and earn 200 points.</p>
                    <p><Button intent="success" className="rightMargin">Begin challenge</Button> 
                    <Button intent="info" onClick={() => setNewThingsShow(false)}>No thank you</Button>
                    </p>
                    
            </Card>}
      <h1>Dashboard</h1>
      <MyData />
      <h3>Local Offers from {location}</h3>
      <Rewards />
      <h3>Daily Challenges</h3>
      <Rewards />
    </div>
  );
}

export default Dashboard;
