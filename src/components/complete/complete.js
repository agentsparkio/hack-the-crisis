import React from 'react';
import {
    Button,
} from "@blueprintjs/core";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import "./complete.css";

function Complete({ points, isHidden }) {
    const { width, height } = useWindowSize()
    if(isHidden) return null;
    return (
        <div className="Complete">
            <Confetti
                width={width}
                height={height}
            />

            <div className="Complete__pointsContainer">
                <span className="Complete__pointsBrackets"> {"\\ "} </span>
                <div className="Complete__pointsStack">
                    <span className="Complete__points"> {points} </span>
                    <span className="Complete__pointsTxt">GREEN POINTS</span>
                </div>
                <span className="Complete__pointsBrackets"> {`/`}  </span>

            </div>
            <Button className="Complete__wohoo" onClick={() => {
                window.history.back();
            }}>WOHOO!</Button>
        </div>
    );
}

export default Complete;
