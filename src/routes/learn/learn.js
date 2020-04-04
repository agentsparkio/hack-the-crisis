import React from 'react';
import Challenge from "./challenge";
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
                    name="Managing Waste"
                    score="300"
                    total="400"
                    icon="refresh"
                    link="/waste-management"
                />
                <Challenge
                    name="Food Waste"
                    score="300"
                    total="400"
                    icon="tree"
                    link=""
                />
                <Challenge
                    name="Compost Challenge"
                    score="400"
                    total="400"
                    icon="heatmap"
                />
            </div>
            <div className="clear" />
        </div>
    );
}

export default Learn;
