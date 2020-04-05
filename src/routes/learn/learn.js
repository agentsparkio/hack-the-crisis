import React from 'react';
import { withRouter } from "react-router-dom";
import Challenge from "./challenge";
import Alert from "./../../components/alert/alert";
import "./learn.css";

function Learn({ userName, setIntroAlert, introAlert, introAlertText, introAlertHeader }) {
    return (
        <div className="Learn container">
            {introAlert && (<h1>Hi <strong>{userName}</strong></h1>)}
            <Alert
            title={introAlertHeader}
            content={introAlertText}
            confirmText="Yes, lets do this"
            cancelText="No thanks"
            confirmFunc={() => {
                // FIXME:
                if(introAlertHeader.indexOf("Do you want to do something fulfilling") !== 0) {
                    window.location.replace("/rewards")
                } else {
                    window.location.replace("/about")
                }
            }}
            cancelFunc={() => setIntroAlert(false)}
            isHidden={!introAlert}
            />
            <p>We've made some lessons to help you do better with your household waste.</p>
            <p>We've also given you 1000 Green points to start with.</p>
            {/* <p><Link to="/about"><Button icon="share" >Learn more about Wasteful ></Button></Link></p> */}
            <h3>Enjoy!</h3>
            <div className="flex">
                <Challenge
                    name="Managing Waste"
                    score="300"
                    total="400"
                    icon="refresh"
                    link="/waste-management"
                />
                <Challenge
                    name="Food Waste"
                    score="300"
                    total="400"
                    icon="tree"
                    link=""
                />
                <Challenge
                    name="Compost Challenge"
                    score="400"
                    total="400"
                    icon="heatmap"
                />
            </div>
            <div className="clear" />
        </div>
    );
}

export default withRouter(Learn);
