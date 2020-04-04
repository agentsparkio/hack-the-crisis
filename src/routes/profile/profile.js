import React from 'react';
import { Icon } from "@blueprintjs/core";
import "./profile.css";

function Profile({ location, points, userName }) {
    return (
        <div className="Profile">
            <div className="profile" />
            <div className="info">
                <h2>{userName}</h2>
                <div className="Profile__points">{points}</div>
                <div className="Profile__pointsText">Green Points</div>
                <div className="Profile__level">Level 16: Green Thumb <Icon icon="thumbs-up" /></div>
        {/* <Icon icon="geolocation" /> {location} */}
        <div className="bottomSpace" />
        <h3>Your badges</h3>
        [ badges ]
            </div>
        </div>
    );
}

export default Profile;

