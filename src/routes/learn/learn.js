import React from 'react';
import Challenge from "./challenge";
import "./learn.css";

function Learn() {
    return (
        <div className="Learn">
            <p>Dashboard: Earn 100 extra GP today by doing the following challenges: </p>
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
