import React from 'react';
import Badge from "../../components/badge/badge";
import "./profile.css";

function Profile() {
    return (
        <div className="Profile">
            <div className="profile" />
            <div className="info">
                Jane Smith<br />
        Testville NSW<br />
        Level 10 - Captain Planet<br />
                <Badge points="20" />
            </div>
        </div>
    );
}

export default Profile;

