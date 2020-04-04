import React from 'react';
import "./about.css";

function About({ title }) {
    return (
        <div className="About container">
            <h1>About {title}</h1>
            <h2>PROBLEM</h2>
            <ul style={{ textAlign: "left" }}>
                <li>Surplus of food / excess money</li>
                <li>Household waste / charity</li>
                <li>People have more time now / life improvement</li>
            </ul>
            <h2>SOLUTION</h2>
            <p>Donations and Waste Management</p>
        </div>
    );
}

export default About;
