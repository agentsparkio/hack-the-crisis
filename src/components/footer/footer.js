import React from 'react';
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarGroup,
} from "@blueprintjs/core";
import {
    NavLink
} from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <Navbar>
                <NavbarGroup align={Alignment.CENTER}>
                    {/** FIXME: Active Styles */}
                    <NavLink exact activeClassName="active" to="/"><Button className={Classes.MINIMAL} icon="walk" text="Do" /></NavLink>
                    <NavLink exact activeClassName="active" to="/learn"><Button className={Classes.MINIMAL} icon="heart" text="Learn" /></NavLink>
                    <NavLink exact activeClassName="active" to="/explore"><Button className={Classes.MINIMAL} icon="layout" text="Explore" /></NavLink>
                </NavbarGroup>
            </Navbar>
        </footer>
    );
}

export default Footer;
