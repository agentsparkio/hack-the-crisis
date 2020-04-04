import React from 'react';
import Challenge from "./challenge";
import "./learn.css";

function Learn() {
    return (
        <div className="Learn">
            <h1>Learn about Sustainability</h1>
            <p>You can complete the following challenges to redeem all points for this week. The more you learn, the more green points you earn.</p>
            
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
