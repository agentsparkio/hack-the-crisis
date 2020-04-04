import React from 'react';
import "./heatmap.css";
import DATA from "./data/map.json";
// import Badge from "../badge/badge";

function Map() {
    const [leaderboard, setLeaderboard] = React.useState(DATA.leaderboard);

    return (
        <div className="Map">
            <div className="Map__itemHeader">
                <div className="left">
                    SUBURB
                </div>
                <div className="right">
                    POINTS
                </div>
                <div className="bottomSpace clear" />
            </div>
            {leaderboard.map(suburb => {
                return (
                    <div className="Map__item">
                        <div className="left">
                            {suburb.label}
                        </div>
                        <div className="right">
                            {suburb.points}
                            {/* <Badge points={suburb.points} /> */}
                        </div>
                        <div className="clear" />
                    </div>)
            })}
            <img src="./map.png" />

        </div>
    );
}

export default Map;
