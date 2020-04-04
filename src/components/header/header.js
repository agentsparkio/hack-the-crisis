import React from 'react';
import { IconNames } from "@blueprintjs/icons";
import {
    Icon,
    Alignment,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    ProgressBar
} from "@blueprintjs/core";
import Badge from "./../badge/badge";
import {
    Link
} from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header className="Header">
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <Icon icon={IconNames.HEATMAP} />
                    <NavbarHeading>
                    <Link to="/"><h1>Garbage Pride</h1></Link>
                    </NavbarHeading>
                </NavbarGroup>
                {/* <NavbarGroup align={Alignment.RIGHT} className="Header__points">
                    <ProgressBar value={0.6} stripes={false} />
                    <Link to="/learn"><div className="Header__pointsRemain">EARN 400 MORE GP</div></Link>
                    
                </NavbarGroup> */}
            </Navbar>
        </header>
    );
}

export default Header;
