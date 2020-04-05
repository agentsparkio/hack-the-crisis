import React from 'react';
import { withRouter } from "react-router-dom";
import Challenge from "./challenge";
import Alert from "./../../components/alert/alert";
import "./learn.css";

function Learn({ setNotifyText, setNotifyTextHeader }) {
  const [newThingsShow, setNewThingsShow] = React.useState(true);

    return (
        <div className="Learn container">
            <h1>Welcome to GP :)</h1>
            <Alert
            title="Why do you need to care about waste management?"
            content=""
            confirmText="Learn more"
            cancelText="No thanks"
            confirmFunc={() => {}}
            cancelFunc={() => setNewThingsShow(false)}
            isHidden={!newThingsShow}
            />
            <p>The more you learn, the more green points you earn.</p>
            {/* <p><Link to="/about"><Button icon="share" >Learn more about Wasteful ></Button></Link></p> */}
            <h3>Local Challenges</h3>
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
