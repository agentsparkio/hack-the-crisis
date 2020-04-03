import React from 'react';
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarGroup,
} from "@blueprintjs/core";
import {
    Link
} from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <Navbar>
                <NavbarGroup align={Alignment.CENTER}>
                    <Link to="/me"><Button className={Classes.MINIMAL} icon="user" text="Me" /></Link>
                    <Link to="/learn"><Button className={Classes.MINIMAL} icon="trending-up" text="Learn" /></Link>
                    <Link to="/explore"><Button className={Classes.MINIMAL} icon="layout" text="Explore" /></Link>
                </NavbarGroup>
            </Navbar>
        </footer>
    );
}

export default Footer;
