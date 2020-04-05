import React from 'react';
import Heatmap from "./../../components/heatmap/index";

function Leaderboard({ setNotifyText, setNotifyTextHeader }) {
    setNotifyText("<p>You made it! You can use this coupon to redeem 50% off our rewards retailers. <strong>CODE: TOP5</strong></p><p><a>Click here</a> to share daily challenges with friends and earn 50 GREEN POINTS!</p>")
    setNotifyTextHeader("CONGRATULATIONS! It looks like you're in the top 5 suburbs!")
    return (
        <div className="Leaderboard">
            <Heatmap />
        </div>
    );
}

export default Leaderboard;
