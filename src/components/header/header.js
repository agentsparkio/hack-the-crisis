import React from 'react';
import { IconNames } from "@blueprintjs/icons";
import {
    Icon,
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
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
                        <Link to="/"><Icon icon={IconNames.UPDATED} /> Home</Link>
                    </NavbarHeading>
                    <NavbarDivider />
                    <Link to="/me"><Button className={Classes.MINIMAL} icon="user" text="Me" /></Link>
                    <Link to="/learn"><Button className={Classes.MINIMAL} icon="trending-up" text="Learn" /></Link>
                    <Link to="/explore"><Button className={Classes.MINIMAL} icon="layout" text="Explore" /></Link>
                </NavbarGroup>
            </Navbar>
        </header>
    );
}

export default Header;
