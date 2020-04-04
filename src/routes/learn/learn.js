import React from 'react';
import Challenge from "./challenge";

function Learn() {
    return (
        <div className="Learn">
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
