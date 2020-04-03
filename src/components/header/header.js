import React from 'react';
import { IconNames } from "@blueprintjs/icons";
import {
    Icon,
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";
import {
    Link
} from "react-router-dom";

function Header() {
    return (
        <header className="Header">
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <NavbarHeading>
                        <Link to="/"><Icon icon={IconNames.HEATMAP} /> eConnect</Link>
                    </NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                    <Link to="/settings"><Button className={Classes.MINIMAL} icon="cog" text="" /></Link>
                </NavbarGroup>
            </Navbar>
        </header>
    );
}

export default Header;
