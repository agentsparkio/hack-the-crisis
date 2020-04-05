import React from 'react';
import { Collapse, Icon } from "@blueprintjs/core";
import "./intro.css";

function IntroCollapse({ isOpen, notifyText, notifyTextHeader }) {
    const [open, setOpen] = React.useState(isOpen);
    const formattedText = {
        __html: notifyText
    }

    return (
        <div className="Intro">
            <a className="Intro__hitArea" onClick={() => setOpen(!open)}>
                {!open && <Icon icon="chevron-down" />}
                {open && <Icon icon="chevron-up" />}
                <span className="Intro__text">{notifyTextHeader}</span>
            </a>
            <Collapse isOpen={open} keepChildrenMounted={false}>
                <div className="IntroCollapse__hi" dangerouslySetInnerHTML={formattedText} />
            </Collapse>
        </div>

    );
}

export default IntroCollapse;
