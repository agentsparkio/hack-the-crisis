import React from 'react';
import { ProgressBar, Card, Elevation } from "@blueprintjs/core";
import Challenge from "./challenge";
import "./learn.css";

function Learn() {
    return (
        <div className="Learn">
            <Card interactive={true} elevation={Elevation.TWO} className="Learn__dashboard">
                <p>NEW CHALLENGES THIS WEEK</p>
                <ProgressBar intent="success" value={0.2} animate={true} stripes={false} className="Learn__progress" />
                <p>You can complete the following challenges to redeem all points for this week.</p>
            </Card>
            <Challenge
                name="Recycling 101"
                score="3"
                total="15"
                icon="tree"
                link="/recycling"
            />
            <Challenge
                name="Food Waste"
                score="3"
                total="15"
                icon="tree"
                link=""
            />
            <Challenge
                name="Compost Challenge"
                score="15"
                total="15"
                icon="heatmap"
            />
            <Challenge
                name="Compost Challenge"
                score="15"
                total="15"
                icon="heatmap"
            />
        </div>
    );
}

export default Learn;
