import React from 'react';
import { Icon } from "@blueprintjs/core";
import Badge from "../../components/badge/badge";
import "./profile.css";

function Profile() {
    return (
        <div className="Profile">
            <div className="profile" />
            <div className="info">
                <h2>Jane Smith</h2>
                <div className="Profile__points">230</div>
                <div className="Profile__pointsText">Green Points</div>
        <Icon icon="geolocation" /> Testville, NSW
            </div>
        </div>
    );
}

export default Profile;

