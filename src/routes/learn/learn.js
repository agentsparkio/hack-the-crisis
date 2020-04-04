import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import Challenge from "./challenge";
import Badge from "./../../components/badge/badge";
import "./learn.css";

function Learn() {
    return (
        <div className="Learn">
            <Card interactive={true} elevation={Elevation.TWO} className="Learn__dashboard">
                <p>NEW CHALLENGES TODAY</p>
                <p>450 / 500 GREEN POINTS STATUS BAR</p>
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
