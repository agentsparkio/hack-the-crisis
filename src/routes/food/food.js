import React from 'react';
import "./food.css";

function Food({ setNotifyText, setNotifyTextHeader }) {
    return (
        <div className="Food container">
            <h1>Manage your food</h1>
            <p>We are working on a tool to track your food inventory.</p>
            <p>Stay tuned.</p>
        </div>
    );
}

export default Food;
