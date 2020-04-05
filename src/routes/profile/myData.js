import React from 'react';
import { Card } from "@blueprintjs/core";
import "./myData.css";

function MyData() {
    return (
        <div className="MyData">
            <Card>
                <h2>You have no data yet :(</h2>
                <p>Come back to see stats on food and house waste to see where you can improve your savings and efficiency.</p>
            </Card>
        </div>
    );
}

export default MyData;
