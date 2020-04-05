import React from 'react';
import About from "./../../routes/profile/about";
import { Button, Intent } from "@blueprintjs/core";

function Welcome({ onOpen, panelId }) {
    const openNewPanel = () => {
        const newPanelNumber = panelId + 1;
        onOpen({
            props: { 
                panelNumber: newPanelNumber,
                onOpen
             },
            component: About,
            title: `Panel ${newPanelNumber}`,
        });
    };

    return (
        <div className="Welcome">
            <h3>Hello!</h3>
            <Button intent={Intent.PRIMARY} onClick={openNewPanel} text="Open new panel" />
        </div>
    );
}

export default Welcome;

