import React from 'react';
import { Icon } from "@blueprintjs/core";
import { Card, Button } from "@blueprintjs/core";
import Rewards from "./Rewards";
import MyData from "./../profile/myData";
import './dashboard.css';
import Challenge from "./../learn/challenge";

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
      <h1>Get active</h1>
      <h3>Local Offers from {location} <Icon icon="geolocation" /></h3>
      <Rewards />
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
    </div>
  );
}

export default Dashboard;
