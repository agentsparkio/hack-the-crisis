import React from 'react';
import { IconNames } from "@blueprintjs/icons";
import {
    Icon,
    Alignment,
    Navbar,
    NavbarGroup,
    NavbarHeading,
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
                    <NavbarHeading>
                        <Link to="/"><Icon icon={IconNames.HEATMAP} /> eConnect</Link>
                    </NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT}>
                <Badge points="20" />
                </NavbarGroup>
            </Navbar>
        </header>
    );
}

export default Header;
