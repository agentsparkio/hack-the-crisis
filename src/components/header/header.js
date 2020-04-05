import React from 'react';
import { IconNames } from "@blueprintjs/icons";
import {
    Icon,
    Alignment,
    Navbar,
    NavbarGroup,
    NavbarHeading,
    Menu, MenuDivider, MenuItem, Popover, Position } from "@blueprintjs/core";

import { Link } from "react-router-dom";
import IntroCollapse from "../notification/notification";
import "./header.css";

function Header({ title, location, notifyTextHeader, notifyText, notify }) {
    const ProfileMenu = (
        <Menu>
            <Link to="/profile"><MenuItem icon="user" text="Profile" /></Link>
            <Link to="/timeline"><MenuItem icon="star" text="My Badges" /></Link>
            <Link to="/my-data"><MenuItem icon="timeline-line-chart" text="My Data" /></Link>
            <Link to="/food"><MenuItem icon="send-to-graph" text="Food Management" /></Link>
            <MenuItem icon="map" text="Map (coming soon)" disabled={true} />
            <MenuDivider />
            <Link to="/about"><MenuItem icon="help" text="About" /></Link>
            <MenuItem icon="log-out" text="Logout" disabled={true} />
        </Menu>
    );

    return (
        <header className="Header">
            <Navbar>
                <NavbarGroup align={Alignment.LEFT} className="Header__logo">
                    <Icon icon={IconNames.CLEAN} />
                    <NavbarHeading>
                        <Link to="/"><h1>{title}</h1></Link> <span className="Header__tag">Improve your life.</span>
                    </NavbarHeading>
                </NavbarGroup>
                <NavbarGroup align={Alignment.RIGHT} className="Header__points">
                    <span className="Header__location">
                     Your location is {location} <Icon icon="geolocation" />
                    </span>
                <Popover content={ProfileMenu} position={Position.RIGHT_BOTTOM}>
                    <div className="Header__profile" />
                    {/* <Icon icon="user" className="Header__profileIcon"></Icon> */}
                </Popover>
                </NavbarGroup>
            </Navbar>
            <IntroCollapse isOpen={notify} notify={notify} notifyTextHeader={notifyTextHeader} notifyText={notifyText} />
        </header>
    );
}

export default Header;
