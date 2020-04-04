import React from 'react';
import { IconNames } from "@blueprintjs/icons";
import {
    Icon,
    Alignment,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";

import {
    Link
} from "react-router-dom";
import "./header.css";

function Header() {
    const ProfileMenu = (
        <Menu>
            <Link to="/profile"><MenuItem icon="user" text="Profile" /></Link>
            <Link to="/timeline"><MenuItem icon="star" text="My Badges" /></Link>
            <Link to="/my-data"><MenuItem icon="timeline-line-chart" text="My Data" /></Link>
            <MenuItem icon="map" text="Map (coming soon)" disabled={true} />
            <MenuDivider />
            <Link to="/about"><MenuItem icon="help" text="About" /></Link>
            <MenuItem icon="log-out" text="Logout" disabled={true} />
        </Menu>
    );

    return (
        <header className="Header">
            <Navbar>
                <NavbarGroup align={Alignment.LEFT}>
                    <Icon icon={IconNames.CIRCLE} />
                    <NavbarHeading>
                        <Link to="/"><h1>Zero Waste</h1></Link>
                    </NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT} className="Header__points">
                <Popover content={ProfileMenu} position={Position.RIGHT_BOTTOM}>
                    <Icon icon="user"></Icon>
                </Popover>
                </NavbarGroup>
            </Navbar>
        </header>
    );
}

export default Header;
