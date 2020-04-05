import React from 'react';
import { Button, H5, Intent, IPanel, IPanelProps, NumericInput, PanelStack, Switch, UL } from "@blueprintjs/core";
import Welcome from "./welcome";
import About from "./../../routes/profile/about";
import "./onboarding.css";

function Onboarding({ }) {
    const [activePanelOnly, toggleActiveOnly] = React.useState(true);
    const onOpen = (newPanel) => {
        setcurrentPanelStack([newPanel, ...currentPanelStack])
    };
    const onClose = (_lastPanel) => {
        setcurrentPanelStack(currentPanelStack.slice(1))
    };
    
    const initialPanel = {
        component: Welcome,
        props: {
            onOpen,
            panelNumber: 1,
        },
        title: "Panel 1",
    };
    const tourPanel = {
        component: About,
        props: {
            onOpen,
            panelNumber: 2,
        },
        title: "Panel 2",
    };
    const [currentPanelStack, setcurrentPanelStack] = React.useState([initialPanel]);

    return (
        <div className="Onboarding">
            <PanelStack
                initialPanel={initialPanel}
                currentPanelStack={[tourPanel, initialPanel]}
                onOpen={onOpen}
                onClose={onClose}
                renderActivePanelOnly={activePanelOnly}
            />
        </div>
    );
}

export default Onboarding;

