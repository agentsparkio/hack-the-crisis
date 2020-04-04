import React from 'react';
import { Button } from "@blueprintjs/core";
import Challenge from "./challenge";
import { Link } from "react-router-dom";
import "./learn.css";

function Learn() {
    return (
        <div className="Learn container">
            <h1>Learn by doing.</h1>
            <p>You can complete the following challenges to redeem all points for this week. </p>
            <p>The more you learn, the more green points you earn.</p>
            {/* <p><Link to="/about"><Button icon="share" >Learn more about Wasteful ></Button></Link></p> */}
            <h3>Local Challenges</h3>
            <div className="flex">
                <Challenge
                    name="Recycling 101"
                    score="300"
                    total="15"
                    icon="refresh"
                    link="/recycling"
                />
                <Challenge
                    name="Food Waste"
                    score="300"
                    total="15"
                    icon="tree"
                    link=""
                />
                <Challenge
                    name="Compost Challenge"
                    score="300"
                    total="15"
                    icon="heatmap"
                />
            </div>
            <div className="clear" />
            <h3>National Challenges</h3>
            <div className="flex">
                {/* <Challenge
                name="Covid O War"
                score="12"
                total="15"
                icon="heatmap"
                theme="COVID19"
            /> */}
            <Challenge
                name="Donations to Red Cross"
                score="12"
                total="15"
                icon="plus"
                theme="RED"
            />
            <Challenge
                name="Donations to Salvos"
                score="12"
                total="15"
                icon="plus"
                theme="RED"
            />
            </div>
        </div>
    );
}

export default Learn;
